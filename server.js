const app = require('./src/app');

const PORT = 3055;

const server = app.listen(PORT, () => {
    console.log('Server is running on PORT: ', PORT);
})


// ctrl c =>
// process.on('SIGINT', () => {
//     server.close(() => console.log(`Exist server express`))
// })