import Title from "../ui/Title";
import OutsideClickHandler from "react-outside-click-handler";
import Image from "next/legacy/image";
import { GiCancel } from "react-icons/gi";
import { useFormik } from "formik";
import Input from "../form/Input";

const AddProduct = ({ setIsProductModal }) => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        actions.resetForm();
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            img: "",
            title: "",
            desc: "",
            category: "",
            email: "",
            date: "",
        },

        onSubmit,
    });

    return (
        <div
            className="fixed w-screen h-[calc(100vh_-_88px)] z-30 top-0 left-0 
                    after:content-[''] after:w-screen after:h-screen after:bg-slate-600 
                    after:absolute after:opacity-10 grid place-content-center"
        >
            <OutsideClickHandler
                onOutsideClick={() => {
                    setIsProductModal(false);
                }}
            >
                <div className="relative z-40 w-full h-full text-black">
                    <div className="w-[400px] p-5 md:w-[600px] md:p-10  border-2 rounded-3xl bg-white">
                        <GiCancel
                            size={25}
                            className="absolute right-4 top-4  cursor-pointer hover:opacity-60"
                            onClick={() => {
                                setIsProductModal(false);
                            }}
                        />
                        <Title addClass={"text-[40px] text-center"}>Add New a Product</Title>
                        <form className="md:flex-1 w-full" onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-y-5 my-4 w-full">
                                <div className="flex flex-col text-sm">
                                    <span className="font-semibold mb-2">Choose an image</span>
                                    <input type="file" name="image" id="image" className="border-2 border-black p-2" />
                                </div>

                                <div className="flex flex-col text-sm">
                                    <span className="font-semibold mb-2">Title</span>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        placeholder="Write a title"
                                        className="border-2 border-black p-2 outline-none"
                                    />
                                </div>

                                <div className="flex flex-col text-sm">
                                    <span className="font-semibold mb-2">Description</span>
                                    <textarea
                                        name="desc"
                                        id=""
                                        cols="30"
                                        rows="2"
                                        placeholder="Write a description"
                                        className="border-2 border-black p-2 outline-none"
                                    ></textarea>
                                </div>

                                <div className="flex flex-col text-sm">
                                    <span className="font-semibold mb-2">Categories</span>
                                    <select name="category" id="category" className="border-2 border-black p-2">
                                        <option value="1">A</option>
                                        <option value="2">B</option>
                                        <option value="3">C</option>
                                    </select>
                                </div>

                                <div className="flex flex-col text-sm">
                                    <span className="font-semibold mb-2">Prices</span>
                                    <div className="grid grid-cols-3 gap-2">
                                        <input
                                            type="number"
                                            placeholder="small"
                                            className="p-1 border-b-2 border-black outline-none"
                                        />
                                        <input
                                            type="number"
                                            placeholder="medium"
                                            className="p-1 border-b-2 border-black outline-none"
                                        />
                                        <input
                                            type="number"
                                            placeholder="large"
                                            className="p-1 border-b-2 border-black outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col text-sm">
                                    <span className="font-semibold mb-2">Extra</span>
                                    <div className="grid grid-cols-3 gap-2">
                                        <input
                                            type="text"
                                            placeholder="item"
                                            className="p-1 border-b-2 border-black outline-none"
                                        />
                                        <input
                                            type="number"
                                            placeholder="price"
                                            className="p-1 border-b-2 border-black outline-none"
                                        />
                                        <button className="btn !w-20 !bg-primary !text-center ml-auto" type="submit">
                                            Add
                                        </button>
                                    </div>
                                    <div className="">
                                        <span className="inline-block text-xs text-orange-500 mt-4 border border-orange-500 rounded-full px-2 py-1">Ketcap</span>
                                    </div>
                                </div>
                            </div>
                            <button className="btn text-xl !bg-green-500 block mt-10 !ml-auto" type="submit">
                                Create
                            </button>
                        </form>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    );
};

export default AddProduct;
