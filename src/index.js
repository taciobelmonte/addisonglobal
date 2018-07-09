import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './assets/css/main.css';
import './assets/css/responsive.css';
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Create Store
const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk),
    )
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));