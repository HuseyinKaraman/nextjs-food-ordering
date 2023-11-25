import React, { useState } from "react";
import Title from "../ui/Title";
import { useFormik } from "formik";
import Input from "../form/Input";

const Category = () => {

    const [categories, setCategories] = useState(["Pizza", "Hamburger", "Tea", "Water"])

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 700));
        setCategories([...categories, values.category]);
        actions.resetForm();
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            category: "",
        },

        onSubmit,
        // validationSchema: reservationSchema,
    });

    return (
        <>
            <Title addClass={"text-[40px] mb-4"}>Categories</Title>
            <form className="flex gap-10 mb-4 justify-between items-center" onSubmit={handleSubmit}>
                <Input
                    name="category"
                    type="text"
                    placeholder="Add new a category"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.category}
                    errorMessage={errors.category}
                    touched={touched.category}
                />
                <button className="btn-primary w-24 h-fit text-white" type="submit">
                    Add
                </button>
            </form>
            <div className="mt-14">
                {categories.map((item, index) => (
                    <div key={index} className="flex justify-between mb-3">
                        <b>{item}</b>
                        <button className="btn-primary !bg-danger text-white p-4" 
                        onClick={()=>setCategories(categories.filter((cat)=>cat!==item))}>Delete</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Category;
