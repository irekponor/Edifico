import { useState } from "react";
import { AiOutlineClose, AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsInfoLg } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { LuNewspaper } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";

const Responsive = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("state change");
  };
  return (
    <div>
      <AiOutlineMenu
        size={20}
        onClick={handleNav}
        className="text-white absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div>
          <AiOutlineClose
            size={20}
            onClick={handleNav}
            className="text-black absolute top-4 right-4 z-[99] md:hidden"
          />
          <div className="md:hidden fixed w-full h-screen bg-white flex flex-col justify-center items-center z-20">
            <a
              onClick={handleNav}
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
              onClick={handleNav}
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
              onClick={handleNav}
              href="#home"
              className="w-[80%] flex text-black items-center justify-center text-center no-underline rounded-full
             bg-custom-color/45 p-3 m-3 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <BiSearch className="size-6" />
              <span className="pl-4 font-semibold font-marquis text-[18px]">
                Research
              </span>
            </a>
            <a
              onClick={handleNav}
              href="#home"
              className="w-[80%] flex text-black items-center justify-center text-center no-underline rounded-full
             bg-custom-color/45 p-3 m-3 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <LuNewspaper className="size-6" />
              <span className="pl-4 font-semibold font-marquis text-[18px]">
                News & Events
              </span>
            </a>
            <a
              onClick={handleNav}
              href="#home"
              className="w-[80%] flex text-black items-center justify-center text-center no-underline rounded-full
             bg-custom-color/45 p-3 m-3 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <RiGraduationCapLine className="size-6" />
              <span className="pl-4 font-semibold font-marquis text-[18px]">
                Admissions
              </span>
            </a>
            <a
              onClick={handleNav}
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
