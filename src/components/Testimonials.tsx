import Rank from "./Rank";
import Testitem from "./Testitem";
import anita from "../assets/anita.jfif";
import john from "../assets/john.jfif";
import kofi from "../assets/kofi.jfif";
import kim from "../assets/kim.jfif";
import robb from "../assets/Robb.jfif";

const data = [
  {
    name: `Anita Adarabioro`,
    degree: `Bsc, Msc`,
    img: <img src={anita} alt="" />,
    details:
      "I am filled with a mix of sadness and gratitude, knowing I will miss the exceptional education and experiences it provided.",
  },
  {
    name: `John statham`,
    degree: `Bsc, Msc, Phd`,
    img: <img src={john} alt="" />,
    details:
      "The rigorous academic programs at Edufico University prepared me well for my future endeavors, and I am thankful for the opportunity to have studied there.",
  },
  {
    name: `Kofi Kulumaye`,
    degree: `Phd`,
    img: <img src={kofi} alt="" />,
    details:
      "Edufico University commitment to excellence and innovation has equipped me with the skills and knowledge to succeed, and I am proud to call myself an alumnus.",
  },
  {
    name: `Kim-min Jae`,
    degree: `Msc, Phd`,
    img: <img src={kim} alt="" />,
    details:
      "I am reminded of the countless opportunities it provided for growth, exploration, and self-discovery, making my time there truly transformative.",
  },
  {
    name: `Robb Stark`,
    degree: `Msc, Phd`,
    img: <img src={robb} alt="" />,
    details:
      "Edufico University's vibrant campus life and diverse student body made for an enriching experience, allowing me to connect with peers from various backgrounds and cultures",
  },
];
const Testimonials = () => {
  return (
    <div className="pt-20">
      <Rank />
      <div className="max-w-[1040px] m-auto md:pl-20 p-4">
        <h1 className="text-custom-color font-marquis uppercase text-center pt-16 text-[19px]">
          Testimonials
        </h1>
        <p className="text-custom-color font-name text-center">
          What our students say
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
