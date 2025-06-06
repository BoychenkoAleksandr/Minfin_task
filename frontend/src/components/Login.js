import React from 'react';
import {Button, Form, Input, App} from 'antd';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../actions/loginActions";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { notification } = App.useApp();

    const onFinish = (values) => {
        dispatch(login(values))
            .then((result) => {
                if (result.success) {
                    navigate('/table');
                    notification.success({
                        message: 'Вы успешно вошли в систему',
                    })
                } else {
                    notification.error({
                        message: 'Ошибка входа',
                        description: result.error
                    });
                }
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onClick = () => {
        navigate('/register');
    };

    return (
        <Form
            name="login"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 1100, paddingLeft: '700px', paddingTop: '100px'}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            <Form.Item
                label="Логин"
                name="username"
                rules={[{required: true, message: 'Введите имя'}]}>
                <Input/>
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[{required: true, message: 'Введите пароль'}]}>
                <Input.Password/>
            </Form.Item>

            <Form.Item style={{paddingLeft: '130px'}}>
                <div style={{display: "flex"}}>
                    <Button type="primary" htmlType="submit">
                        Вход
                    </Button>
                    <Button
                        style={{marginLeft: '10px'}}
                        onClick={onClick}>
                        Регистрация
                    </Button>
                </div>
            </Form.Item>
        </Form>
    );
}

export default Login;