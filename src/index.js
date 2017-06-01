import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { browserHistory } from 'react-router';
import Root from 'components/Root';

const target = document.getElementById('root');

ReactDOM.render(<Root history={browserHistory} />, target);
