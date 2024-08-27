import { BsTwitter } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { MdCopyright } from "react-icons/md";
import { SiInstagram } from "react-icons/si";

const Contact = () => {
  return (
    <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <div className="flex justify-between">
        <h1 className="font-marquis py-4 text-4xl font-bold text-custom-color">
          Connect with us
        </h1>
        <a href="" className="flex pt-4">
          <FaFacebook className="text-custom-color cursor-pointer" size={20} />
        </a>
        <a href="" className="flex pt-4">
          <SiInstagram className="text-custom-color cursor-pointer" size={20} />
        </a>
        <a href="" className="flex pt-4">
          <FaLinkedin className="text-custom-color cursor-pointer" size={20} />
        </a>
        <a href="" className="flex pt-4">
          <IoLogoYoutube
            className="text-custom-color cursor-pointer"
            size={20}
          />
        </a>
        <a href="" className="flex pt-4">
          <BsTwitter className="text-custom-color cursor-pointer" size={20} />
        </a>
        <a href="" className="flex pt-4">
          <FaTiktok className="text-custom-color cursor-pointer" size={20} />
        </a>
      </div>
      <div className="mt-10 pl-28 pr-16 grid gap-16 sm:grid-cols-3">
        <div>
          <h3 className="font-marquis text-custom-color mb-3">Quick Links</h3>
          <p className="font-name text-custom-color">Admission</p>
          <p className="font-name text-custom-color">Records</p>
          <p className="font-name text-custom-color">Enterprises</p>
          <p className="font-name text-custom-color">Staff Intranet</p>
          <p className="font-name text-custom-color">Support Us</p>
          <p className="font-name text-custom-color">
            School Of Advanced Study
          </p>
        </div>
        <div>
          <h3 className="font-marquis text-custom-color mb-3">Quick Links</h3>
          <p className="font-name text-custom-color">Admission</p>
          <p className="font-name text-custom-color">Records</p>
          <p className="font-name text-custom-color">Enterprises</p>
          <p className="font-name text-custom-color">Staff Intranet</p>
          <p className="font-name text-custom-color">Support Us</p>
          <p className="font-name text-custom-color">
            School Of Advanced Study
          </p>
        </div>
        <div>
          <h3 className="font-marquis text-custom-color mb-3">Quick Links</h3>
          <p className="font-name text-custom-color">Admission</p>
          <p className="font-name text-custom-color">Records</p>
          <p className="font-name text-custom-color">Enterprises</p>
          <p className="font-name text-custom-color">Staff Intranet</p>
          <p className="font-name text-custom-color">Support Us</p>
          <p className="font-name text-custom-color">
            School Of Advanced Study
          </p>
        </div>
      </div>
      <p className="text-black text-center items-center font-marquis pt-10">
        <a
          href=""
          className="text-black text-center items-center font-marquis pt-10"
        >
          <MdCopyright
            className="text-center items-center text-black"
            size={20}
          />
        </a>
        2024 Edifico University
      </p>
    </div>
  );
};

export default Contact;
