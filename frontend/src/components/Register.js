import React from 'react';
import {App, Button, Form, Input} from 'antd';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {API_REGISTER} from "../constants/APIConstants";


const Register = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { notification } = App.useApp();

    const onFinish = (values) => {
        axios.post(`${API_REGISTER}`,
            {password: values.password, username: values.username})
            .then(() => {
                navigate('/login')
                notification.success({
                    message: 'Регистрация прошла успешно',
                })
            })
            .catch((error) => {
                notification.error({
                    message: 'Ошибка регистрации',
                    description: error.response?.data?.message
                })
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            form={form}
            name="register"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 1400, paddingLeft: '550px', paddingTop: '100px'}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            <Form.Item
                label="Логин"
                name="username"
                rules={[{required: true, message: 'Введите логин'}]}>
                <Input/>
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, введите пароль',
                    },
                    {
                        pattern: /[A-Z]/,
                        message: 'Пароль должен содержать хотя бы одну заглавную букву',
                    },
                    {
                        pattern: /[0-9]/,
                        message: 'Пароль должен содержать хотя бы одну цифру',
                    },
                    {
                        min: 8,
                        message: 'Пароль должен содержать минимум 8 символов',
                    },
                ]}>
                <Input.Password/>
            </Form.Item>

            <Form.Item
                label="Подтвердите пароль"
                name="confirm"
                validateTrigger={['onChange', 'onBlur']}
                rules={[
                    {
                        required: true,
                        message: 'Введите пароль'
                    },
                    {
                        validator: (rule, value, callback) => {
                            if (value && value !== form.getFieldValue('password')) {
                                callback('Пароли не совпадают!');
                            } else {
                                callback();
                            }
                        },
                    },
                ]}>
                <Input.Password/>
            </Form.Item>

            <Form.Item style={{paddingLeft: '130px'}}>
                <Button type="primary" htmlType="submit">
                    Зарегистрировать
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Register;