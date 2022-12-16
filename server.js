const express = require('express');
const path = require('path');

const app = express();

const main = require('./mailer');

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

app.listen(PORT, 'localhost', (error) => {
    if(error) {
        console.log(error)
    } else {
        console.log(`listening port ${PORT}`);
    };
});

app.get('/', (req, res) => {
    console.log('send index page');
    res.sendFile(createPath('index'));
});

app.get('/mail', (req, res) => {
    main().catch(console.error);
    res.sendFile(createPath('mail'));
});

app.use((req, res) => {
    res
       .status(404) 
       .send('<h1>ERROR</h1>')
    console.log('Error !!!')
});

