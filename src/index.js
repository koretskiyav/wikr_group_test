import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { browserHistory } from 'react-router';
import Root from 'components/Root';

import { API_KEY, API_PREFIX } from 'config';
import Api from 'api';

window.api = new Api(API_PREFIX, API_KEY);

const target = document.getElementById('root');

ReactDOM.render(<Root history={browserHistory} />, target);
