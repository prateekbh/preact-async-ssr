const express = require('express');
const router = express.Router();
const render = require('preact-render-to-string');
const { h } = require('preact');
import App from '../client-routes/App/app.js';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {ssr: render(h(App, {url: '/'}))});
});

module.exports = router;
