var express = require('express');
var router = express.Router();
const apple = require('app-store-scraper');

/* GET home page. */
router.get('/', function (req, res, next) {
  let storeId = req.query.store_id;
  console.log(storeId)
  apple.app({id: storeId})
      .then((str) => res.send(str))
      .catch((err) => res.send(err))
});

module.exports = router;