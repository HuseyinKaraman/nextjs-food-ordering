import * as Yup from "yup";

export const footerSchema = Yup.object().shape({
    location: Yup.string().min(5, "Location must be at least 5 characters").required("Location is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    phoneNumber: Yup.string()
        .min(10, "Phone number must be at least 10 characters")
        .required("Phone number is required"),
    desc: Yup.string().min(5, "Description must be at least 5 characters").required("Description is required"),
    day: Yup.string().required("Day is required"),
    time: Yup.string().required("Time is required"),
});
