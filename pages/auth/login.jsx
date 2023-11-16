import React from "react";
import Title from "../../components/ui/Title";
import Input from "../../components/form/Input";
import { useFormik } from "formik";
import { loginSchema } from "../../schema/loginSchema";
import Link from "next/link";

const Login = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        alert(values.password)
        actions.resetForm();
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        onSubmit,
        validationSchema: loginSchema,
    });

    const inputs = [
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
    ];

    return (
        <div className="container mx-auto py-20 sm:h-[630px]">
            <Title addClass={"text-[40px] text-center"}>Login</Title>
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
                    <button className="btn-primary w-full !bg-secondray !text-white" type="submit">
                        <i className="fa-brands fa-github mr-2 !text-[18px]"></i>GITHUB
                    </button>
                    <Link href={"/auth/register"} className="underline text-sm cursor-pointer text-gray-600">
                        Do you no have a account?
                    </Link>
                </form>
        </div>
    );
};

export default Login;
