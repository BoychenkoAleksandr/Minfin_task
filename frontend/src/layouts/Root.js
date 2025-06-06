import React, {Component} from "react";
import {Navigate, Route, Routes} from 'react-router-dom';
import {Layout} from 'antd';
import Login from "../components/Login";
import Register from "../components/Register";
import {connect} from "react-redux";
import BankDictionary from "../components/BankDictionary";
import axiosInterceptors from '../interceptors/axiosInterceptors';
export const Path = {
    root: '/',
    login: '/login',
    register: '/register',
    table: '/table'
};

axiosInterceptors();

class Root extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: props.isAuth,
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { isAuth } = this.props;
        if (prevProps.isAuth !== this.props.isAuth)
            this.setState({isAuthenticated: isAuth})
    }

    renderRoot = () => {
        if (!localStorage.getItem('token') ||
            parseInt(localStorage.getItem('token_expiry'), 10) - Date.now() <= 0) {
            return [
                <Route key="otherRoutes" path="*" element={<Navigate replace to = {Path.login} />}/>,
                <Route key={Path.login} path={Path.login} element={<Login />}/>,
                <Route key={Path.register} path={Path.register} element={<Register />}/>,
            ];
        } else {
            return [
                <Route key={Path.table} path={Path.table} element={<BankDictionary />}/>
            ]
        }
    };

    render() {
        return (
            <Layout className="app-container">
                <Routes>
                    {this.renderRoot()}
                </Routes>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
       isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps)(Root);