const express = require('express');
const app = express();

app.get('/ping', (request, response) => {
    response.send('esto es una prueba');
});

app.get('/myPath', function (req, res, next) { response.send('esto es una prueba'); });
app.listen(9090, 'localhost');