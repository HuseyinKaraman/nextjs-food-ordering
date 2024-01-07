
import Title from "../../components/ui/Title";
import Input from "../../components/form/Input";
import { useFormik } from "formik";
import { adminSchema } from "../../schema/adminSchema";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

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

const Login = () => {
    const { push } = useRouter();

    const onSubmit = async (values, actions) => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin`, values);
            if (res.status === 200) {
                toast.success("Admin Login successfully", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
                actions.resetForm();
                push("/admin/profile");
            }
        } catch (err) {
            const message = err.response.data ? err.response.data.message : "Something went wrong";
            toast.error(message, {
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
            username: "",
            password: "",
        },

        onSubmit,
        validationSchema: adminSchema,
    });

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


//** https://nextjs.org/docs/pages/api-reference/functions/get-server-side-props */
//! todo : change this func dinamic token
export const getServerSideProps = (ctx)=>{
    const myCookie = ctx.req?.cookies || "";
    if (myCookie.token === process.env.ADMIN_TOKEN) {
        return {
            redirect: {
                destination: "/admin/profile",
                permanent: false,
            },
        };
    }

    return {
        props: {}
    }

};


export default Login;
