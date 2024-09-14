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
          <h3 className="font-marquis text-custom-color mb-3">Services</h3>
          <p className="font-name text-custom-color">Admission</p>
          <p className="font-name text-custom-color">Libraries</p>
          <p className="font-name text-custom-color">Halls in Edifico</p>
          <p className="font-name text-custom-color">Venues hire</p>
          <p className="font-name text-custom-color">Request a transcript</p>
          <p className="font-name text-custom-color">The career's group</p>
        </div>
        <div>
          <h3 className="font-marquis text-custom-color mb-3">Get In Touch</h3>
          <p className="font-name text-custom-color">Contact Us</p>
          <p className="font-name text-custom-color">Vancancies (Careers)</p>
          <p className="font-name text-custom-color">Job Application</p>
          <p className="font-name text-custom-color">
            Prospective undergraduates
          </p>
        </div>
      </div>
      <p className="text-custom-color text-[18px] pt-10 text-center items-center font-marquis">
        2024 All Rights Reserved
      </p>
    </div>
  );
};

export default Contact;
