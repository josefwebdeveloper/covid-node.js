const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/us/current', getUsCurrent);
router.get('/states/current', getStatesCurrent);
router.get('/states/daily', getStatesDaily);
router.get('/us/daily', getUsDaily);
router.get('/states/info', getStatesInfo);


module.exports = router;


function getStatesInfo(req, res, next) {
    axios.get('http://covidtracking.com/api/states/info')
        .then(response => {
            return response.data ? res.json({
                data: {
                    response: response.data,
                    statusText: response.statusText
                }
            }) : res.sendStatus(404)
        })
        .catch(error => {
            return next(error)
        });
}

function getUsCurrent(req, res, next) {
    axios.get('http://covidtracking.com/api/us')
        .then(response => {
            return response.data ? res.json({
                data: {
                    response: response.data,
                    statusText: response.statusText
                }
            }) : res.sendStatus(404)
        })
        .catch(error => {
            return next(error)
        });
}

function getUsDaily(req, res, next) {
    axios.get('http://covidtracking.com/api/us/daily')
        .then(response => {
            return response.data ? res.json({
                data: {
                    response: response.data,
                    statusText: response.statusText
                }
            }) : res.sendStatus(404)
        })
        .catch(error => {
            return next(error)
        });
}

function getStatesDaily(req, res, next) {
    axios.get('http://covidtracking.com/api/states/daily')
        .then(response => {
            return response.data ? res.json({
                data: {
                    response: response.data,
                    statusText: response.statusText
                }
            }) : res.sendStatus(404)
        })
        .catch(error => {
            return next(error)
        });
}

function getStatesCurrent(req, res, next) {
    axios.get('https://covidtracking.com/api/states')
        .then(response => {
            return response.data ? res.json({
                data: {
                    response: response.data,
                    statusText: response.statusText
                }
            }) : res.sendStatus(404)
        })
        .catch(error => {
            return next(error)
        });
}





