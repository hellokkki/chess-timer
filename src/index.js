import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



import { rootReducer } from './redux/rootReducer';

const store = createStore(rootReducer)
console.log(store);
store.getState();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>
);

