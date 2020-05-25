/* NPM modules */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
/* Own modules */
import App from './components/App/App';
/* Material UI */
/* Assets */
/* CSS */
import './index.css';

import { configureStore } from './store';

const store = configureStore();

console.log(store);

// Forzar el modo producción
const app = <Provider store={store}>
                <SnackbarProvider maxSnack={2}>
                    <App/>
                </SnackbarProvider>
            </Provider>

ReactDOM.render(app, document.getElementById('root'));