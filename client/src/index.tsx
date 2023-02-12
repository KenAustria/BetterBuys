import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import setupStore from './store';
import reportWebVitals from './reportWebVitals';

// import { persistor } from './store';
// import setupStore from './store';
// import { PersistGate } from 'redux-persist/integration/react';
// import reportWebVitals from './reportWebVitals';

const store = setupStore();
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const vital = getVitalMetrics();
reportWebVitals(vital);
function getVitalMetrics() {
    throw new Error('Function not implemented.');
}
