import {render, h} from 'preact';
import App from './client-routes/App/app';
import './client-app.css';

render(
    <App></App>,
  document.querySelector('.app'),
  document.querySelector('.app')
);