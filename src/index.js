import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
            </Provider>
        </React.StrictMode>
    );
}
store.subscribe(renderEntireTree)
renderEntireTree();
