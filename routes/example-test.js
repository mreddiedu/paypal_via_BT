var express = require('express'); 
var router = express.Router(); //Creates a new Router object

router.use(function (req, res, next) {
    console.log('%s %s %s', req.method, req.url, req.path)
    next()
})

router.use('/users', function (req, res, next) {
    next()
})

router.use(function (req, res, next) {
    res.send('Hello World')
})

module.exports = router;