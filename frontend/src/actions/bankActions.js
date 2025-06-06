import {BANK} from "../constants/actionConstants";
import axios from "axios";

export const getBanks = (requestData) => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:8080/api/banks',
                {params: {page: requestData.page, size: requestData.size,}})
            dispatch({
                type: BANK,
                payload: {
                    ...response.data
                }
            });
            return { success: true };

        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Ошибка входа';
            return { success: false, error: errorMessage };
        }
    };
};