import * as Yup from "yup";

export const profileSchema = Yup.object().shape({
    fullName: Yup.string().min(5, "Full name must be at least 5 characters").required("Full Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    phoneNumber: Yup.string()
        .min(10, "Phone number must be at least 10 characters")
        .required("Phone number is required"),
    address: Yup.string()
        .min(10, "Address must be at least 10 characters")
        .required("Address is required"),
    job: Yup.string()
        .min(4, "Job must be at least 4 characters"),
    bio: Yup.string()
        .min(4, "Bio must be at least 4 characters"),
    
});
