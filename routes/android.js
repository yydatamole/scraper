var express = require('express');
var router = express.Router();
const google = require('google-play-scraper');

/* GET home page. */
router.get('/', function (req, res, next) {
    let id = req.query.store_id;
    console.log(id)
    google.app({appId: id})
        .then((str) => res.send(str));
});

module.exports = router;
