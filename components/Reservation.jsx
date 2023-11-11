import Title from "./ui/Title";
import Input from "./form/Input";

const Reservation = () => {
    return (
        <div className="container mx-auto py-12 md:px-0">
            <Title addClass="text-[40px] mb-10">Book A Table</Title>
            <div className="flex justify-between items-center flex-wrap gap-10">
                <div className="lg:flex-1 w-full">
                    <div className="flex flex-col gap-y-3 mb-4">
                        <Input />
                        <Input />
                        <Input />
                        <Input />
                        <Input />
                    </div>
                    <button className="btn-primary">Book Now</button>
                </div>
                <div className="lg:flex-1 w-full h-[400px]">
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
