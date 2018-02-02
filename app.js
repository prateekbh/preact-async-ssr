import express from 'express';
import {h} from 'preact';
import render from 'preact-render-to-string';
import Match from 'preact-router/match';
import App from './client-routes/App/app';
import path from 'path';
import mustacheExpress from 'mustache-express';

const port = 3000;
const server = express();
server.engine('mustache', mustacheExpress());

server.set('view engine', 'mustache');
server.set('views', process.cwd() + '/views');
server.use('/public', express.static(path.join(process.cwd(), 'public')));

server.get('*', (req, res) => {
  res.render('index', {
    ssr: render(h(App, {url: req.url})),
  });
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);