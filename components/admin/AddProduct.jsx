import { GiCancel } from "react-icons/gi";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import { newProductSchema } from "../../schema/newProductSchema";

const multiChoice = ["Pizza", "Hamburger", "Fries", "Doner"];

const AddProduct = ({ setIsProductModal, categories, getProducts }) => {
    const [file, setFile] = useState();
    const [imageSrc, setImageSrc] = useState(false);
    const [extraOptions, setExtraOptions] = useState([]);
    const [extra, setExtra] = useState({ text: "", price: 0, error: null });
    const [prices, setPrices] = useState(multiChoice.includes(categories[0].name) ? [null, null, null] : [null]);

    const onSubmit = async (values, actions) => {
        try {
            const url = await handleCreate();
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
                ...values,
                img: url,
                extraOptions,
            });
            if (res.status === 201) {
                actions.resetForm();
                setIsProductModal(false);
                toast.success("Product created successfully", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                getProducts();
            }
        } catch (error) {
            toast.error(error.response.data.message, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur, setFieldValue } = useFormik({
        initialValues: {
            img: "",
            title: "",
            desc: "",
            categoryId: categories[0]?._id,
            prices: prices,
            extraOptions,
        },

        onSubmit,
        validationSchema: newProductSchema,
    });

    const handleChangeImage = (e) => {
        const reader = new FileReader();
        reader.onload = (onLoadEvent) => {
            if (reader.readyState === 2) {
                setImageSrc(onLoadEvent.target.result);
                setFile(e.target.files[0]);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    const handleCreate = async () => {
        try {
            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "food-ordering");
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/diqboijhi/image/upload", data);
            const { url } = uploadRes.data;
            return url;
        } catch (error) {
            toast.error("image upload failed", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const handleExtra = () => {
        if (extra.text && extra.price) {
            setExtraOptions((prev) => [...prev, { text: extra.text, price: extra.price }]);
            setFieldValue("extraOptions", [...values.extraOptions, { text: extra.text, price: extra.price }]);
            setExtra({ text: "", price: 0 });
        } else {
            if (extra.text === "" && extra.price < 0) {
                setExtra({ ...extra, error: "both" });
            } else if (extra.text === "") {
                setExtra({ ...extra, error: "text" });
            } else if (extra.price < 0) {
                setExtra({ ...extra, error: "price" });
            }
        }
    };

    const changePrices = (e, index) => {
        const currentPrices = prices;
        currentPrices[index] = e.target.value;
        setPrices(currentPrices);
        setFieldValue("prices", currentPrices);
    };

    const imageSrcEmpty = (e) => {
        e.preventDefault();
        toast.warning("Image source is empty", {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    function handleCategory(e) {
        handleChange(e);
        categories.forEach((item) => {
            if (item._id === e.target.value) {
                if (multiChoice.includes(item.name)) {
                    setPrices([null, null, null]);
                } else {
                    setPrices([null]);
                }
            }
        });
    }

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
                        <form
                            className="md:flex-1 w-full"
                            onSubmit={(e) => (imageSrc ? handleSubmit(e) : imageSrcEmpty(e))}
                        >
                            <div className="flex flex-col gap-y-5 my-4 w-full">
                                <div className="flex gap-20 items-center text-sm h-20">
                                    <label className="h-full mt-10">
                                        <input name="img" type="file" className="hidden" onChange={handleChangeImage} />
                                        <button className="btn-primary pointer-events-none">Choose an Image</button>
                                    </label>
                                    {imageSrc && (
                                        <div className="relative">
                                            <GiCancel
                                                size={15}
                                                className="text-red-600 absolute -left-2 top-0  cursor-pointer"
                                                onClick={() => {
                                                    setImageSrc(false);
                                                    setFile(false);
                                                }}
                                            />
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={imageSrc} alt="" className="mt-2 w-16 h-16" />
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col text-sm">
                                    <span className="font-semibold mb-2">Title</span>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        placeholder="Write a title"
                                        className="border-2 border-black p-2 outline-none"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.title}
                                    />{" "}
                                    <br />
                                    {touched.title && <span className="text-xs text-danger">{errors.title}</span>}
                                </div>

                                <div className="flex flex-col text-sm">
                                    <span className="font-semibold mb-2">Description</span>
                                    <textarea
                                        name="desc"
                                        id="desc"
                                        cols="30"
                                        rows="2"
                                        placeholder="Write a description"
                                        className="border-2 border-black p-2 outline-none"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.desc}
                                    ></textarea>
                                    {touched.desc && <span className="text-xs text-danger">{errors.desc}</span>}
                                </div>

                                <div className="flex flex-col text-sm">
                                    <span className="font-semibold mb-2">Categories</span>
                                    <select
                                        name="categoryId"
                                        className="border-2 border-black p-2"
                                        onChange={handleCategory}
                                        value={values.categoryId}
                                        onBlur={handleBlur}
                                    >
                                        {categories &&
                                            categories.map((item, i) => (
                                                <option value={item._id} key={i}>
                                                    {item.name}
                                                </option>
                                            ))}
                                    </select>
                                </div>

                                <div className="flex flex-col text-sm mb-5 w-full">
                                    <span className="font-semibold mb-2">Prices</span>
                                    <div className="flex w-full justify-between">
                                        {prices.map((item, i) => (
                                            <div key={i}>
                                                <input
                                                    type="number"
                                                    placeholder={`Price ${i + 1}`}
                                                    className="p-1 border-b-2 border-black outline-none w-32"
                                                    onChange={(e) => changePrices(e, i)}
                                                    value={item}
                                                />
                                                <br />
                                                {errors?.prices && (
                                                    <span className="text-xs text-danger">{errors?.prices[i]}</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col text-sm mb-5">
                                    <div className="font-semibold mb-2">
                                        <span>Extra</span>
                                        {extra.error === "both" && (
                                            <span className="text-xs mt-2 ml-5 text-danger">All field is required</span>
                                        )}
                                        {errors?.extraOptions && (
                                            <span className="text-xs mt-2 ml-5 text-danger">{errors.extraOptions}</span>
                                        )}
                                    </div>
                                    <div className="flex gap-2 items-start">
                                        <div className="flex flex-col">
                                            <input
                                                name={"text"}
                                                placeholder="text"
                                                onChange={(e) =>
                                                    setExtra({ ...extra, [e.target.name]: e.target.value })
                                                }
                                                className="p-1 border-b-2 border-black outline-none"
                                            />
                                            {extra.error === "text" && (
                                                <span className="text-xs mt-2 text-danger">text is required</span>
                                            )}
                                        </div>
                                        <div className="flex flex-col">
                                            <input
                                                name={"price"}
                                                type="number"
                                                placeholder="price"
                                                onChange={(e) =>
                                                    setExtra({ ...extra, [e.target.name]: e.target.value })
                                                }
                                                className="p-1 border-b-2 border-black outline-none"
                                            />
                                            {extra.error === "price" && (
                                                <span className="text-xs mt-2 text-danger">price greatern than 0</span>
                                            )}
                                        </div>
                                        <button
                                            className="btn !w-20 !bg-primary !text-center ml-auto"
                                            type="submit"
                                            onClick={handleExtra}
                                        >
                                            Add
                                        </button>
                                    </div>
                                    <div>
                                        {extraOptions.map((item, index) => (
                                            <span
                                                className="inline-block text-xs cursor-pointer text-orange-500 mt-4 border border-orange-500 rounded-full px-2 py-1 mr-1"
                                                key={index}
                                                onClick={() =>
                                                    setExtraOptions(
                                                        extraOptions.filter((extraOp) => extraOp.text !== item.text)
                                                    )
                                                }
                                            >
                                                {item.text}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <button className="btn text-xl !bg-green-500 block mt-5 !ml-auto" type="submit">
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
