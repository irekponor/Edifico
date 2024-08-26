import { useState } from "react";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";

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
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="md:hidden fixed w-full h-screen bg-white flex flex-col justify-center items-center z-20">
          <a
            href="#home"
            className="w-[80%] flex text-black items-center justify-center text-center no-underline rounded-full
             bg-[#87ceeb] p-4 m-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome className="size-6" />
            <span className="pl-4 font-semibold font-marquis">Home</span>
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Responsive;
