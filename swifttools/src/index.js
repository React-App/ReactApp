import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterRoot from './router'
import registerServiceWorker from './service/registerServiceWorker';

ReactDOM.render(<RouterRoot />, document.getElementById('root'));
registerServiceWorker();
