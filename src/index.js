import App from './App';
import { Provider } from 'react-redux';
import Loader from 'Components/Loader';
import React, { Suspense } from 'react';
import { setupStore } from './store/store';
import { createRoot } from 'react-dom/client';
import { DevLinkProvider } from "Main/devlink";
import { BrowserRouter } from 'react-router-dom';
import PopupManager from "Components/PopupManager";

const store = setupStore();

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Suspense fallback={<Loader/>}>
            <BrowserRouter>
                <DevLinkProvider>
                    <App/>
                    <PopupManager/>
                </DevLinkProvider>
            </BrowserRouter>
        </Suspense>
    </Provider>
);
