import { useState } from "react";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";

const Responsive = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div>
          <a href="">
            <AiOutlineHome />
            <span>Home</span>
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Responsive;
