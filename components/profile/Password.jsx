import React from "react";
import Title from "../ui/Title";
import Input from "../form/Input";
import { useFormik } from "formik";
import { newPasswordSchema } from "../../schema/newPasswordSchema";

const Password = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        alert(values.password);
        actions.resetForm();
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
        },

        onSubmit,
        validationSchema: newPasswordSchema,
    });

    const inputs = [
        {
            name: "password",
            type: "password",
            placeholder: "Your Password",
        },
        {
            name: "confirmPassword",
            type: "password",
            placeholder: "Your Password Again",
        }
    ];

    return (
        <>
            <Title addClass={"text-[40px]"}>Password Change</Title>
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

export default Password;
