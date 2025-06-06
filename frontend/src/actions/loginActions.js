import {LOGIN, LOGOUT} from "../constants/actionConstants";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import {API_LOGIN} from "../constants/APIConstants";


export const login = (credentials) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${API_LOGIN}`, {
                username: credentials.username,
                password: credentials.password
            });
            const token = response.data.token;
            localStorage.setItem('token', response.data.token);
            const decodedToken = jwtDecode(token);
            if (decodedToken?.exp) {
                const expiryTime = decodedToken.exp * 1000; // JWT exp в секундах, переводим в мс
                localStorage.setItem('token_expiry', expiryTime.toString());
                setTimeout(() => dispatch(logout()), expiryTime - Date.now());
            }
            dispatch({
                type: LOGIN,
                payload: {
                    token: token,
                    userId: response.data.userId,
                    username: response.data.username,
                    isAuth: true
                }
            });
            return { success: true };

        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Ошибка входа';
            return { success: false, error: errorMessage };
        }
    };
};

export const logout = () => {
    return async (dispatch) => {
        localStorage.removeItem('token');
        localStorage.removeItem('token_expiry');
        dispatch({
            type: LOGOUT,
        })
        window.location.reload();
    };
};