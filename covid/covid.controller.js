const express = require('express');
const router = express.Router();
const axios = require('axios');

// router.get('/', getAll);
// router.post('/create', create);
router.get('/us/current', getUsCurrent);
router.get('/states/current', getStatesCurrent);
// router.get('/getNext/:id', getNext);

// router.put('/:articleId', updateById);
// router.delete('/:articleId', deleteById);

module.exports = router;

// module.exports = {
// function getById(req, res, next) {
//     console.log(req.body);
//     articleModel.findById(req.params.articleId, function (err, covid) {
//         if (err) {
//             next(err);
//         } else {
//             res.json({status: 'success', message: 'Article found!!!', data: {covid: covid}});
//         }
//     });
// }

function getUsCurrent(req, res, next) {
    axios.get('http://covidtracking.com/api/us')
        .then(response => {
            return response.data ? res.json({data: {response: response.data,statusText:response.statusText}}) : res.sendStatus(404)
        })
        .catch(error => {
            return next(error)
        });
}
function getStatesCurrent(req, res, next) {
    axios.get('https://covidtracking.com/api/states')
        .then(response => {
            return response.data ? res.json({data: {response: response.data,statusText:response.statusText}}) : res.sendStatus(404)
        })
        .catch(error => {
            return next(error)
        });
}


function getFirst(req, res, next) {
    console.log('getFirst contr');
    articleService.getFirst()
        .then(article => article ? res.json({data: {article: article}}) : res.sendStatus(404))
        .catch(err => next(err));
}

// function getById(req, res, next) {
//     articleService.getById(req.params.id)
//         .then(article => {
//             console.log(article, 'w');
//             return article ? res.json({data: {article: article}}) : res.sendStatus(404);
//         })
//         .catch(err => next(err));
// }
//
// function getAll(req, res, next) {
//     console.log('getRandom contr');
//
//     articleService.getAll()
//         .then(articles => res.json({status: 'success', message: 'Articles found!!!', data: {articles: articles}}))
//         .catch(err => next(err));
// }

// function getAll(req, res, next) {
//     let articleList = [];
//
//     articleModel.find({}, function (err, articles) {
//         if (err) {
//             next(err);
//         } else {
//             for (let covid of articles) {
//                 articleList.push({id: covid._id, covid: covid.covid, type: covid.type});
//             }
//             res.json({status: 'success', message: 'Movies list found!!!', data: {movies: moviesList}});
//
//         }
//
//     });
// }

// function updateById(req, res, next) {
//     articleModel.findByIdAndUpdate(req.params.movieId, {name: req.body.name}, function (err, movieInfo) {
//
//         if (err)
//             next(err);
//         else {
//             res.json({status: 'success', message: 'Movie updated successfully!!!', data: null});
//         }
//     });
// }


// function deleteById(req, res, next) {
//     articleModel.findByIdAndRemove(req.params.movieId, function (err, movieInfo) {
//         if (err)
//             next(err);
//         else {
//             res.json({status: 'success', message: 'Movie deleted successfully!!!', data: null});
//         }
//     });
// }
// function create(req, res, next) {
//     timerService.create().then(() => res.json({status: 'success', message: 'Timer added successfully!!!', data: null}))
//         .catch(err => next(err));
//     articleService.create(req.body)
//         .then(() => res.json({status: 'success', message: 'Article added successfully!!!', data: null}))
//         .catch(err => next(err));
// }

// function create(req, res, next) {
//     articleModel.create({name: req.body.name, released_on: req.body.released_on}, function (err, result) {
//         if (err)
//             next(err);
//         else
//             res.json({status: 'success', message: 'Movie added successfully!!!', data: null});
//
//     });
// }

// }
