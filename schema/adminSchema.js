import * as Yup from "yup";

export const adminSchema = Yup.object().shape({
    username: Yup.string().required("Username is required").min(3,"Username must be at least 3 characters"),
    password: Yup.string().required("Password is required")
    .min(8,"Password must be at least 8 characters")
    .matches(/(?=.*?[A-Z])(?=.*?[a-z])(?=.*\d)(?=.*?[#?!@$%^&*-+.,])[A-Za-z\d@$!%*?&+.,]/,"Password must contain at least one upper case,lower case,one digit,special characters")
});
