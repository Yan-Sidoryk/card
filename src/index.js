import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Card from './Card';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Card title="Yan">
hello world, this is my first react project
</Card>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
