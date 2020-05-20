/* NPM modules */
import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';
/* Own modules */
import App from './components/App/App';
//models
import Session from './models/Session';
/* Material UI */
/* Assets */
/* CSS */
import './index.css';

import { store } from './store';

console.log(store);

// Forzar el modo producción
const app = <SnackbarProvider maxSnack={2}>
                <App/>
            </SnackbarProvider>

ReactDOM.render(app, document.getElementById('root'));