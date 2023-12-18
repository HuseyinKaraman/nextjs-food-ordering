import { useState } from "react";
import Image from "next/image";
import Account from "../../components/profile/Account";
import Password from "../../components/profile/Password";
import Order from "../../components/profile/Order";
import PopConfirm from "../../components/ui/PopConfirm";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Profile = () => {
    const [tabs, setTabs] = useState(0);
    const [confirm, setConfirm] = useState(false);
    const { push } = useRouter();

    const handleSignOut = async () => {
        try {
            setConfirm(false);
            signOut({ redirect: false });
            push("/auth/login");
        } catch (err) {
            // const message = "Something went wrong";
            // toast.error(message, {
            //     position: "top-right",
            //     autoClose: 1000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            // });
        }
    };

    return (
        <div className="flex min-h-[calc(100vh_-_448px)] mt-5 p-2 md:p-4 flex-col lg:flex-row">
            <div className="relative border-2 w-full max-w-[720px] lg:w-auto lg:min-w-[325px] mx-auto h-fit mb-5">
                <div className="my-5">
                    <Image
                        src={"/images/client1.jpg"}
                        alt="profile"
                        width={100}
                        height={100}
                        className="rounded-full mx-auto"
                    />
                    <h3 className="text-2xl font-bold text-center mt-1">Marie Clare</h3>
                </div>
                <ul className="flex flex-row lg:flex-col border-t lg:border-none justify-evenly font-semibold">
                    <li
                        href="/profile/"
                        className={`hover:bg-primary hover:text-white cursor-pointer  p-1 py-3 lg:p-3 border-r lg:border-y lg:border-r-0  w-full ${
                            tabs === 0 && "bg-primary text-white"
                        }`}
                        onClick={() => setTabs(0)}
                    >
                        <i className="fa fa-home inline-block mr-2 text-xl lg:text-2xl"> </i>
                        <span>Account</span>
                    </li>
                    <li
                        href="/profile/"
                        className={`hover:bg-primary hover:text-white cursor-pointer p-1 py-3 lg:p-3 border-r lg:border-b lg:border-r-0  w-full ${
                            tabs === 1 && "bg-primary text-white"
                        }`}
                        onClick={() => setTabs(1)}
                    >
                        <i className="fa fa-key inline-block mr-2 text-xl"></i>
                        <span>Password</span>
                    </li>
                    <li
                        href="/profile/"
                        className={`hover:bg-primary hover:text-white cursor-pointer p-1 py-3 lg:p-3 border-r lg:border-b lg:border-r-0  w-full ${
                            tabs === 2 && "bg-primary text-white"
                        }`}
                        onClick={() => setTabs(2)}
                    >
                        <i className="fa fa-motorcycle inline-block mr-2 text-xl"></i>
                        <span>Orders</span>
                    </li>
                    <li
                        href="/profile/"
                        className="hover:bg-primary hover:text-white cursor-pointer p-1 py-3 lg:p-3 w-full"
                        onClick={() => setConfirm(true)}
                    >
                        <i className="fa fa-sign-out inline-block mr-2 text-xl lg:text-2xl"></i>
                        <span>Exit</span>
                    </li>
                </ul>
                {confirm && (
                    <PopConfirm
                        setConfirm={setConfirm}
                        question="Are you sure you want to exit?"
                        sendRequest={handleSignOut}
                    />
                )}
            </div>
            <div className="flex-1 lg:px-10 max-w-[1200px]">
                {tabs === 0 && <Account />}
                {tabs === 1 && <Password />}
                {tabs === 2 && <Order />}
            </div>
        </div>
    );
};

export default Profile;
