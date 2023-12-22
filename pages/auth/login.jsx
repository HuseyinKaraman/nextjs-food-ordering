import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, getSession, useSession } from "next-auth/react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { loginSchema } from "../../schema/loginSchema";
import Title from "../../components/ui/Title";
import Input from "../../components/form/Input";
import { useEffect } from "react";

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

const Login = () => {
    const { data: session } = useSession();
    const { push } = useRouter();

    useEffect(() => {
       if (session) {
        push("/profile/"+session?.user._id);
       }
      }, [push, session]);

    const onSubmit = async (values, actions) => {
        const { email, password } = values;
        let options = { redirect: false, email, password };
        try {
            const res = await signIn("credentials", options);
            if (res.status === 200) {
                toast.success("Login successfully", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
                actions.resetForm();
            }
        } catch (err) {
            const message = "Something went wrong";
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
            email: "",
            password: "",
        },

        onSubmit,
        validationSchema: loginSchema,
    });

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
                <div className="flex gap-4">
                    <button
                        className="btn-primary w-full !bg-secondray !text-white"
                        type="button"
                        onClick={() => signIn("github")}
                    >
                        <i className="fa-brands fa-github mr-2 !text-[18px]"></i>GITHUB
                    </button>
                    <button
                        className="btn-primary w-full !bg-secondray !text-white"
                        type="button"
                        onClick={() => signIn("google")}
                    >
                        <i className="fa-brands fa-github mr-2 !text-[18px]"></i>GOOGLE
                    </button>
                </div>
                <Link href={"/auth/register"} className="underline text-sm cursor-pointer text-gray-600">
                    Do you no have a account?
                </Link>
            </form>
        </div>
    );
};

export async function getServerSideProps(ctx) {
    const session = await getSession({ req:ctx.req });

    if (session) {
        return {
            redirect: {
                destination: `/profile/${session.user._id}`,
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
}

export default Login;
