import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import { useFormik } from "formik";
import Input from "../form/Input";
import axios from "axios";
import { toast } from "react-toastify";
import PopConfirm from "../ui/PopConfirm";

const Category = ({ categories, setCategories }) => {
    const [confirm, setConfirm] = useState(false);
    const [category, setCategory] = useState(false);

    const handleCreate = async (values, actions) => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
                name: values.category,
            });
            if (res.status === 201) {
                toast.success("Category added successfully", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
                setCategories([...categories, res.data]);
                actions.resetForm();
            }
        } catch (error) {
            toast.error("Something went wrong", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
    };

    const handleDelete = async () => {
        try {
            const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/categories/${category._id}`);
            if (res.status === 200) {
                toast.success("Category deleted successfully", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
                setCategories(categories.filter((item) => item._id !== category._id));
            }
        } catch (error) {
            toast.error("Something went wrong", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            category: "",
        },
        onSubmit: handleCreate,
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
            <div className="mt-14 max-h-[300px] overflow-auto mb-20">
                {categories &&
                    categories.map((item) => (
                        <div key={item._id} className="flex justify-between mb-3">
                            <b>{item.name}</b>
                            <button
                                className="btn-primary !bg-danger text-white p-4"
                                onClick={() => {
                                    setConfirm(true);
                                    setCategory(item);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                {confirm && (
                    <PopConfirm
                        setConfirm={setConfirm}
                        question="Are you sure you want to delete this category?"
                        sendRequest={handleDelete}
                        addClass={"!bottom-24 !left-24 md:!bottom-80 md:!left-1/2"}
                    />
                )}
            </div>
        </>
    );
};

export default Category;
