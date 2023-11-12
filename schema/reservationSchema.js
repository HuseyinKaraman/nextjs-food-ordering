import * as Yup from "yup";

export const reservationSchema = Yup.object().shape({
    fullName: Yup.string().min(5, "Full name must be at least 5 characters").required("Full Name is required"),
    phoneNumber: Yup.string()
        .min(10, "Phone number must be at least 10 characters")
        .required("Phone number is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    persons: Yup.number().min(1, "Persons must be at least 1").required("Persons is required"),
    date: Yup.date().required("Date is required"),
});
