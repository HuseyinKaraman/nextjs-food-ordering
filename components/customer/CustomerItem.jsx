import Image from "next/legacy/image";
import React from "react";

const CustomerItem = ({imgSrc}) => {
    return (
        <div className="mt-5 mx-4">
            <div className="p-6 bg-secondray text-white rounded-[5px]">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cum quaerat odio autem laudantium
                    laborum a asperiores officia? Sed modi non suscipit nulla dolores fugit harum veniam explicabo,
                    deserunt sapiente!
                </p>
                <div className="flex flex-col mt-4">
                    <span className="text-lg font-semibold">Mike Hamell</span>
                    <span className="text-[15px]">mange aliqua</span>
                </div>
            </div>
            <div className="relative w-28 h-28 mt-7 rounded-full border-4 border-primary 
            before:content-[''] before:bg-primary before:w-5 before:h-6 flex justify-center before:-translate-y-3  before:absolute before:-z-10 before:rotate-45">
                <Image
                    src={`/images/${imgSrc}`}
                    alt="image"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-full border-2 border-primary"
                />
            </div>
        </div>
    );
};

export default CustomerItem;
