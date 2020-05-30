/* NPM modules */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
/* Own modules */
/* Material UI */
/* Assets */
/* CSS */
import './index.css';

import { configureStore } from './store';
import VisibleApp from './containers/VisibleApp/index';

const store = configureStore();

const app = <Provider store={store}>
                <SnackbarProvider maxSnack={2}>
                    <VisibleApp/>
                </SnackbarProvider>
            </Provider>

ReactDOM.render(app, document.getElementById('root'));