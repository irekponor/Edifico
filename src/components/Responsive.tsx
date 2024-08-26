import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Responsive = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className="" />
      {nav ? <div></div> : <div></div>}
    </div>
  );
};

export default Responsive;
