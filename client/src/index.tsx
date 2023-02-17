import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import setupStore from './store';
import reportWebVitals from './reportWebVitals';

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

const vital = getVitalMetrics();
reportWebVitals(vital);
function getVitalMetrics() {
    throw new Error('Function not implemented.');
}
