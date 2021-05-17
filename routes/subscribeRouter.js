const express = require('express');
const subscribeRouter= express.Router();

subscribeRouter.route('/:subscribeId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send subscribe request ${req.params.subscribeId}`);
})
.post((req, res) => {
    res.end(`Will add subscribe request ${req.params.subscribeId}: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /schedule ${req.params.subscribeId}`);
})
.delete((req, res) => {
    res.end(`Deleting subscribe request ${req.params.subscribeId}`);
});

subscribeRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send subscribe request');
})
.post((req, res) => {
    res.end(`Will add subscribe request: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /schedule');
})
.delete((req, res) => {
    res.end('Deleting subscribe request');
});

module.exports = subscribeRouter;