const axios = require('axios').default;
import { api } from "./apiBcra";

export const getCreditSituationByCuil = async (cuil: string) => {
    try {
        console.log('pre await', cuil);
        const response = await api.get(`/credit-status?cuil=${cuil}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        console.log('response', response);
        return response.data;
    } catch (error) {
        throw error;
    }
}