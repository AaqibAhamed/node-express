const express = require('express');

const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')

.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get('/dishes', (req, res, next) => {
    res.end('Will send all the dishes to you!');
})

.post('/dishes', (req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})

.put('/dishes', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})

.delete('/dishes', (req, res, next) => {
    res.end('Deleting all dishes');
});

module.exports = dishRouter;