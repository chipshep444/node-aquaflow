const express = require('express');
const scheduleRouter = express.Router();

scheduleRouter.route('/:scheduleId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send service request ${req.params.scheduleId}`);
})
.post((req, res) => {
    res.end(`Will add service request ${req.params.scheduleId}: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /schedule ${req.params.scheduleId}`);
})
.delete((req, res) => {
    res.end(`Deleting service request ${req.params.scheduleId}`);
});

scheduleRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send service request');
})
.post((req, res) => {
    res.end(`Will add service request: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /schedule');
})
.delete((req, res) => {
    res.end('Deleting service request');
});

module.exports = scheduleRouter;