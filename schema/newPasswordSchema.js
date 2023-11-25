import * as Yup from "yup";

export const newPasswordSchema = Yup.object().shape({
    password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
            /(?=.*?[A-Z])(?=.*?[a-z])(?=.*\d)(?=.*?[#?!@$%^&*-+.,])[A-Za-z\d@$!%*?&+.,]/,
            "Password must contain at least one upper case,lower case,one digit,special characters"
        ),
    confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password"), null], "Passwords must match")
});
 