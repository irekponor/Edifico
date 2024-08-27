import { BsTwitter } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { SiInstagram } from "react-icons/si";

const Contact = () => {
  return (
    <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <div className="flex justify-between">
        <h1 className="font-marquis py-4 text-4xl font-bold text-custom-color">
          Connect with us
        </h1>
        <a href="">
          <FaFacebook className="text-black cursor-pointer" size={30} />
        </a>
        <a href="">
          <SiInstagram className="text-black cursor-pointer" size={30} />
        </a>
        <a href="">
          <FaLinkedin className="text-black cursor-pointer" size={30} />
        </a>
        <a href="">
          <IoLogoYoutube className="text-black cursor-pointer" size={30} />
        </a>
        <a href="">
          <BsTwitter className="text-black cursor-pointer" size={30} />
        </a>
        <a href="">
          <FaTiktok className="text-black cursor-pointer" size={30} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
