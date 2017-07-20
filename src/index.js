import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CATEGORIES from './categorieslist.js';
import registerServiceWorker from './registerServiceWorker';






ReactDOM.render(<App categories={CATEGORIES}/>, document.getElementById('root'));
registerServiceWorker();
