const axios = require('axios').default;
import { api } from "./apiBcra";

export const getCreditSituationByCuil = async (cuil: string) => {
    try {
        console.log('pre await', cuil);
        const response = await api.get(`/credit-status/${cuil}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        console.log('response', response);
        return response.data;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.log('axios error:', error.response?.data.error);
        
            if (error.response) {
              error.response.data?.error?.errorMessages?.map((error: any) => {
                  throw new Error(error || 'Error inesperado del servidor');
              });
            }
        
            if (error.request) {
                console.log('error.request', error.request);
                
              // El request fue hecho pero no hubo respuesta
              throw new Error('No se recibió respuesta del servidor');
            }
        
            // Algo más falló al preparar la request
            throw new Error(error.message || 'Error inesperado al hacer la solicitud');
          } else {
            // Error no relacionado con axios
            throw new Error('Error inesperado o de red');
          }
    }
}