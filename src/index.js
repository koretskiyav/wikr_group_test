import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'mobx-react-router';
import Root from 'components/Root';
import Store from 'stores';

const store = window.store = new Store();

const history = syncHistoryWithStore(browserHistory, store.routing);

const target = document.getElementById('root');

ReactDOM.render(<Root history={history} store={store} />, target);
