import React, { useState } from "react";
import Title from "../ui/Title";
import Input from "../form/Input";
import { useFormik } from "formik";
import { footerSchema } from "../../schema/footerSchema";
import Link from "next/link";

const Footer = () => {
    const [linkAddress, setLinkAddress] = useState("https://");
    const [iconName, setIconName] = useState("fab fa-");
    const [icons, setIcons] = useState([
        {
            icon: "fab fa-facebook",
            link: "https://www.facebook.com/",
        },
        {
            icon: "fab fa-twitter",
            link: "https://twitter.com/",
        },
        {
            icon: "fab fa-instagram",
            link: "https://www.instagram.com/",
        },
        {
            icon: "fab fa-youtube",
            link: "https://www.youtube.com/",
        },
        {
            icon: "fab fa-linkedin",
            link: "https://www.linkedin.com/",
        },
        {
            icon: "fab fa-github",
            link: "https://github.com/",
        },
    ]);

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        alert(values.password);
        actions.resetForm();
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            location: "",
            email: "",
            phoneNumber: "",
            desc: "",
            day: "",
            time: "",
        },

        onSubmit,
        validationSchema: footerSchema,
    });

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
            type: "time",
            placeholder: "Update Time",
        },
    ];
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
                        <button
                            className="btn-primary"
                            type="button"
                            onClick={() => {
                                setIcons([...icons, { icon: iconName, link: linkAddress }]);
                                setLinkAddress("https://");
                                setIconName("fab fa-");
                            }}
                        >
                            Add
                        </button>
                    </div>
                    <ul className="flex items-center gap-6 mb-2">
                        {icons.map((icon, index) => (
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
