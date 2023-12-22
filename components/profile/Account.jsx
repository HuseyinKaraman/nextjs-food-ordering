import axios from "axios";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { profileSchema } from "../../schema/profileSchema";
import Title from "../ui/Title";
import Input from "../form/Input";

const Account = ({user}) => {
    const onSubmit = async (values, actions) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/${user?._id}`, values);
            if (res.status === 200) {
               Object.assign(user, res.data);
                toast.success("Profile updated successfully", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            }
            actions.resetForm();
        } catch (error) {
            const message = error.response.data ? error.response.data.message : "Something went wrong";
            toast.error(message, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            })
        }
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        enableReinitialize: true,
        initialValues: {
            fullName: user?.fullName,
            email: user?.email,
            phoneNumber: user?.phoneNumber,
            address: user?.address,
            job: user?.job,
            bio: user?.bio,
        },

        onSubmit,
        validationSchema: profileSchema,
    });

    const inputs = [
        {
            name: "fullName",
            type: "text",
            placeholder: "Your Full Name",
        },
        {
            name: "email",
            type: "email",
            placeholder: "Your Email Address",
        },
        {
            name: "phoneNumber",
            type: "number",
            placeholder: "Your Phone Number",
        },
        {
            name: "address",
            type: "text",
            placeholder: "Your Address",
        },
        {
            name: "job",
            type: "text",
            placeholder: "Your Job",
        },
        {
            name: "bio",
            type: "text",
            placeholder: "Your Bio",
        },
    ];
    return (
        <>
            <Title addClass={"text-[40px]"}>Account Settings</Title>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 mt-[30px]" onSubmit={handleSubmit}>
                {inputs.map((input, index) => (
                    <Input
                        key={index}
                        {...input}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[input.name]}
                        errorMessage={errors[input.name]}
                        touched={touched[input.name]}
                    />
                ))}
                <button className="btn-primary w-fit !px-8 my-5 md:my-0" type="submit">
                    Update
                </button>
            </form>
        </>
    );
};

export default Account;
