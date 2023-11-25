import React from "react";
import Title from "../../components/ui/Title";
import Input from "../../components/form/Input";
import { useFormik } from "formik";
import { adminSchema } from "../../schema/adminSchema";
import Link from "next/link";

const Login = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        alert(values.username)
        alert(values.password)
        actions.resetForm();
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            username: "",
            password: "",
        },

        onSubmit,
        validationSchema: adminSchema,
    });

    const inputs = [
        {
            name: "username",
            type: "text",
            placeholder: "Your Username",
        },
        {
            name: "password",
            type: "password",
            placeholder: "Your Password",
        },
    ];

    return (
        <div className="container mx-auto py-20 sm:h-[630px]">
            <Title addClass={"text-[40px] text-center"}>Admin Login</Title>
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
                        LOGIN
                    </button>
                    <Link href={"/"} className="underline text-sm cursor-pointer text-gray-600">
                       HomePage
                    </Link>
                </form>
        </div>
    );
};

export default Login;
