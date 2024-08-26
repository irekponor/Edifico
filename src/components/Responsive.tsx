import { useState } from "react";
import { AiOutlineClose, AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { BsBuildings, BsInfoLg } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GrContact } from "react-icons/gr";

const Responsive = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("state change");
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="text-black absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div>
          <AiOutlineClose
            onClick={handleNav}
            className="text-black absolute top-4 right-4 z-[99] md:hidden"
          />
          <div className="md:hidden fixed w-full h-screen bg-white flex flex-col justify-center items-center z-20">
            <a
              href="#home"
              className="w-[80%] flex text-black items-center justify-center text-center no-underline rounded-full
             bg-custom-color/45 p-3 m-3 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <AiOutlineHome className="size-6" />
              <span className="pl-4 font-semibold font-marquis text-[18px]">
                Home
              </span>
            </a>
            <a
              href="#home"
              className="w-[80%] flex text-black items-center justify-center text-center no-underline rounded-full
             bg-custom-color/45 p-3 m-3 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <BsInfoLg className="size-6" />
              <span className="pl-4 font-semibold font-marquis text-[18px]">
                Info
              </span>
            </a>
            <a
              href="#home"
              className="w-[80%] flex text-black items-center justify-center text-center no-underline rounded-full
             bg-custom-color/45 p-3 m-3 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <FaGraduationCap className="size-6" />
              <span className="pl-4 font-semibold font-marquis text-[18px]">
                Program
              </span>
            </a>
            <a
              href="#home"
              className="w-[80%] flex text-black items-center justify-center text-center no-underline rounded-full
             bg-custom-color/45 p-3 m-3 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <BsBuildings className="size-6" />
              <span className="pl-4 font-semibold font-marquis text-[18px]">
                Faculty
              </span>
            </a>
            <a
              href="#home"
              className="w-[80%] flex text-black items-center justify-center text-center no-underline rounded-full
             bg-custom-color/45 p-3 m-3 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <GrContact className="size-6" />
              <span className="pl-4 font-semibold font-marquis text-[18px]">
                Testimonials
              </span>
            </a>
            <a
              href="#home"
              className="w-[80%] flex text-black items-center justify-center text-center no-underline rounded-full
             bg-custom-color/45 p-3 m-3 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <FiMail className="size-6" />
              <span className="pl-4 font-semibold font-marquis text-[18px]">
                Contact
              </span>
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Responsive;
