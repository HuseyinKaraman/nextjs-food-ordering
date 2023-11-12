import Title from "./ui/Title";
import Input from "./form/Input";
import { useFormik } from "formik";
import { reservationSchema } from "../schema/reservationSchema";

const Reservation = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        actions.resetForm();
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            fullName: "",
            phoneNumber: "",
            persons: "",
            email: "",
            date: "",
        },

        onSubmit,
        validationSchema: reservationSchema,
    });

    const inputs = [
        {
            name: "fullName",
            type: "text",
            placeholder: "Your Full Name",
        },
        {
            name: "phoneNumber",
            type: "number",
            placeholder: "Your Phone Number",
        },
        {
            name: "email",
            type: "email",
            placeholder: "Your Email Address",
        },
        {
            name: "persons",
            type: "number",
            placeholder: "How Many Persons?",
        },
        {
            name: "date",
            type: "datetime-local",
        },
    ];

    return (
        <div className="container mx-auto py-12">
            <Title addClass="text-[40px] mb-10 sm:mx-3 xl:mx-0">Book A Table</Title>
            <div className="flex justify-between flex-wrap gap-10 sm:mx-4 xl:mx-0">
                <form className="md:flex-1 w-full" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-y-3 mb-4">
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
                    <button className="btn-primary" type="submit">
                        Book Now
                    </button>
                </form>
                <div className="md:flex-1 w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54303.85588639375!2d-74.06226358349339!3d40.72458317739688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a384775443%3A0x4ad3dc8a6c30ce40!2sCOTE%20Korean%20Steakhouse!5e0!3m2!1str!2str!4v1699394281367!5m2!1str!2str"
                        className="w-full h-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Reservation;
