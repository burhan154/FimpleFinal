import * as yup from "yup"

const createTicketValidations = yup.object().shape({
    name: yup.string().required(),
    lastname: yup.string().required(),
    age: yup.number().required().positive().integer(),
    reason: yup.string().required(),
    photo: yup.string().required(),
    address: yup.string().required()
});

const searchTicketValidations = yup.object().shape({
    code: yup.string().min(36).required(),
});

export {createTicketValidations,searchTicketValidations}