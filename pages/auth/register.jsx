import React from "react";
import Title from "../../components/ui/Title";
import Input from "../../components/form/Input";
import { useFormik } from "formik";
import { registerSchema } from "../../schema/registerSchema";
import Link from "next/link";

const Register = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        actions.resetForm();
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            fullName:"",
            email: "",
            password: "",
            confirmPassword: "",
        },

        onSubmit,
        validationSchema: registerSchema,
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
            name: "password",
            type: "password",
            placeholder: "Your Password",
        },
        {
            name: "confirmPassword",
            type: "password",
            placeholder: "Your Password Again",
        },
    ];

    return (
        <div className="container mx-auto py-10 sm:h-[630px]">
            <Title addClass={"text-[40px] text-center"}>Register</Title>
                <form
                    className="flex flex-col gap-y-3 w-1/2 min-w-[400px] justify-center mx-auto mt-[35px]"
                    onSubmit={handleSubmit}
                >
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
                    <button className="btn-primary w-full" type="submit">
                        REGISTER
                    </button>
                    <Link href={"/auth/login"} className="underline text-sm cursor-pointer text-gray-600">
                        Do you have already a account?
                    </Link>
                </form>
        </div>
    );
};

export default Register
