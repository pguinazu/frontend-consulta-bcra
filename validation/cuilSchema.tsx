import * as yup from 'yup';

export const cuilSchema = yup.object({
  cuil: yup
    .string()
    .required('El CUIL es obligatorio')
    .min(11, 'El CUIL debe tener 11 caracteres')
    .max(11, 'El CUIL debe tener 11 caracteres')
    .matches(/^[0-9]+$/, 'El CUIL debe contener solo números'),
});