var express = require('express');
var request = require('request');
var cheerio = require('cheerio');

var router = express.Router();

router.get('/scrape:url', function(req, res) {
    var url = req.params.url;

    request(url, function(err, res, html) {
        if (err) throw err;

        var $ = cheerio.load(html);

        var title, author, publishDate;
    });
});
