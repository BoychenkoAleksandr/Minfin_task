import React from 'react';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Root from './layouts/Root';
import {createRoot} from "react-dom/client";
import { Provider } from "react-redux"
import { App as AntdApp } from "antd";
import store from "./store/Store";



const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AntdApp>
            <Provider store={store}>
                <Router>
                    <div>
                        <Root/>
                    </div>
                </Router>
            </Provider>
        </AntdApp>
    </React.StrictMode>);
