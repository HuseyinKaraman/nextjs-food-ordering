import Title from "./Title";
import OutsideClickHandler from "react-outside-click-handler";
import Image from "next/legacy/image";
import { GiCancel } from "react-icons/gi";

const SearchComponent = ({ setIsSearchModal }) => {
    return (
        <div
            className="fixed w-screen h-[calc(100vh_-_88px)] z-30 top-0 left-0 
                    after:content-[''] after:w-screen after:h-screen after:bg-white 
                    after:absolute after:opacity-60 grid place-content-center"
        >
            <OutsideClickHandler
                onOutsideClick={() => {
                    setIsSearchModal(false);
                }}
            >
                <div className="relative z-40 w-full h-full text-black">
                    <div className="w-[375px] p-5 md:w-[450px] md:p-10  border-2 rounded-3xl">
                        <GiCancel
                        size={25}
                        className="absolute right-4 top-4  cursor-pointer hover:opacity-60"
                            onClick={() => {
                                setIsSearchModal(false);
                            }}
                        />
                        <Title addClass={"text-[40px] text-center"}>Search</Title>
                        <input type="text" placeholder="Search ..." className="w-full p-2 m-2 border-2 my-5" />
                        {/* // TODO: items: */}
                        <div>
                            <ul>
                                {Array.from([1, 2, 3]).map((_, index) => (
                                    <li
                                        className="m-2 flex justify-between items-center hover:bg-primary transition-all"
                                        key={index}
                                    >
                                        <div className="w-12 h-12 relative">
                                            <Image src={`/images/f${index + 1}.png`} alt={`f${index}`} layout="fill" />
                                        </div>
                                        <span className="font-bold">Pizza-{index}</span>
                                        <span className="font-bold">{(index + 1) * 3}$</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    );
};

export default SearchComponent;
