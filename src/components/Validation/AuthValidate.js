import * as yup from "yup"

const loginValidations = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
});


export {loginValidations}