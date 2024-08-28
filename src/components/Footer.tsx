import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-custom-color pt-10 items-center">
      <p className="text-white text-center items-center font-marquis">
        <MdCopyright
          size={20}
          className="text-white text-center items-center"
        />
        2024 Edifico University
      </p>
    </div>
  );
};

export default Footer;
