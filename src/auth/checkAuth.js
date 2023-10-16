'use strict'

const HEADER = {
    API_KEY: 'x-api-key',
    AUTHORIZATION: 'authorization'
}

const { findById } = require('../services/apiKey.service');

const apiKey = async (req, res, next) => {
    try {
        const key = req.headers[HEADER.API_KEY]?.toString()
        if (!key) {
            return res.status(403).json({
                message: 'Forbidden Error not Key'
            })
        }
        // check objKey
        const objKey = await findById(key);
        if (!objKey) {
            return res.status(403).json({
                message: 'Forbidden Error not objKey'
            })
        }
        req.objKey = objKey;
        return next()
    } catch (error) {

    }
}

const permission = (permission) => {
    return (req, res, next) => {
        if (!req.objKey.permissions) {
            return res.status(403).json({
                message: 'permission denied'
            })
        }

        console.log('permissions db::', req.objKey.permissions);
        const validPermissions = req.objKey.permissions.includes(permission);
        if (!validPermissions) {
            return res.status(403).json({
                message: 'permission invalid'
            })
        }

        return next();
    }
}

module.exports = {
    apiKey,
    permission
}