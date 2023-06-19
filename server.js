const app = require('./src/app');

const PORT = process.env.PORT || 3056;

const server = app.listen(PORT, () => {
    console.log('Server is running on PORT: ', PORT);
})


// ctrl c =>
// process.on('SIGINT', () => {
//     server.close(() => console.log(`Exist server express`))
// })