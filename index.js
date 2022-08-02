const express = require('express');

const app = express();

app.use (() => {
    console.log('server is running')
})

app.listen(4000);