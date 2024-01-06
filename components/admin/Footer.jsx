import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import Input from "../form/Input";
import { useFormik } from "formik";
import { footerSchema } from "../../schema/footerSchema";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

const inputs = [
    {
        name: "location",
        type: "text",
        placeholder: "Your Location",
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
        name: "desc",
        type: "text",
        placeholder: "Update Description",
    },
    {
        name: "day",
        type: "text",
        placeholder: "Update Day",
    },
    {
        name: "time",
        type: "text",
        placeholder: "Update Time",
    },
];

const Footer = () => {
    const [footerData, setFooterData] = useState([]);
    const [linkAddress, setLinkAddress] = useState("https://");
    const [iconName, setIconName] = useState("fab fa-");
    const [icons, setIcons] = useState([]);

    useEffect(() => {
        const getFooterData = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/footer`);
                if (res.status === 200) {
                    setFooterData(res.data[0]);
                    setIcons(res.data[0]?.socialMedia);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getFooterData();
    }, []);

    const onSubmit = async (values, actions) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/footer/${footerData?._id}`, {
                location: values?.location,
                email: values?.email,
                phoneNumber: values?.phoneNumber,
                desc: values?.desc,
                openingHours: {
                    day: values?.day,
                    time: values?.time,
                },
                socialMedia: icons,
            });
            if (res.status === 200) {
                toast.success("Footer updated successfully", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
                setFooterData(res.data);
                setIcons(res.data.socialMedia);
            }
        } catch (error) {
            toast.error(error.message, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        enableReinitialize: true,
        initialValues: {
            location: footerData?.location,
            email: footerData?.email,
            phoneNumber: footerData?.phoneNumber,
            desc: footerData?.desc,
            day: footerData?.openingHours?.day,
            time: footerData?.openingHours?.time,
        },

        onSubmit,
        validationSchema: footerSchema,
    });

    const handleCreateIcon = (e) => {
        setIcons([...icons, { icon: iconName, link: linkAddress }]);
        setLinkAddress("https://");
        setIconName("fab fa-");
    };

    return (
        <>
            <Title addClass={"text-[40px] mb-10"}>Footer Settings</Title>
            <form className="" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
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
                </div>
                <div className="flex md:justify-between md:items-center my-4 gap-4 flex-col md:flex-row flex-wrap">
                    <div className="flex gap-4 items-center lg:w-1/2 w-full">
                        <Input
                            placeholder="Link Address"
                            value={linkAddress}
                            onChange={(e) => setLinkAddress(e.target.value)}
                        />
                        <Input placeholder="Icon Name" value={iconName} onChange={(e) => setIconName(e.target.value)} />
                        <button className="btn-primary" type="button" onClick={handleCreateIcon}>
                            Add
                        </button>
                    </div>
                    <ul className="flex items-center gap-6 mb-2">
                        {icons.length > 0 &&
                            icons.map((icon, index) => (
                                <li key={index}>
                                    <Link href={icon.link} target="_blank">
                                        <i className={`${icon.icon} text-2xl mr-2`}></i>
                                    </Link>
                                    <button
                                        className="text-danger text-md"
                                        type="button"
                                        onClick={() => setIcons(icons.filter((_, i) => i !== index))}
                                    >
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </li>
                            ))}
                    </ul>
                </div>
                <button className="btn-primary w-32 !my-5 md:!my-2" type="submit">
                    Update
                </button>
            </form>
        </>
    );
};

export default Footer;
