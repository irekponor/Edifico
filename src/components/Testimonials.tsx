import Rank from "./Rank";
import anita from "../assets/anita.jfif";
import john from "../assets/john.jfif";
import kim from "../assets/kim.jfif";
import kofi from "../assets/kofi.jfif";
import robb from "../assets/Robb.jfif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="pt-20 bg-custom-color">
      <Rank />
      <div className="max-w-[1040px] m-auto md:pl-20 p-4">
        <h1 className="text-white font-marquis uppercase text-center pt-16 text-[19px]">
          Testimonials
        </h1>
        <p className="text-white pb-6 font-name text-center">
          What our students say
        </p>
        <Slider {...settings}>
          {data.map((d) => (
            <div className="bg-white h-[550px] w-full rounded-xl">
              <div className="h-56 max-md:h-0 rounded-t-xl bg-white flex justify-center items-center">
                <p className="h-44 w-44 rounded-[340px] max-md:hidden">
                  {d.img}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="font-marquis font-semibold text-black max-md:m-0">
                  {d.person}
                </p>
                <p className="font-marquis text-black max-md:hidden">
                  {d.degree}
                </p>
                <p className="font-name text-black max-md:mt-0 max-md:text-center">
                  {d.details}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const data = [
  {
    person: `Anita Adarabioro`,
    degree: `B.A, M.A`,
    img: <img src={anita} alt="" />,
    details:
      "I am filled with a mix of sadness and gratitude, knowing I will miss the exceptional education and experiences it provided.",
  },
  {
    person: `John statham`,
    degree: `B.Sc, M.Sc, Ph.D`,
    img: <img src={john} alt="" />,
    details:
      "The rigorous academic programs at Edifico University prepared me well for my future endeavors, and I am thankful for the opportunity to have studied there.",
  },
  {
    person: `Kofi Kulumaye`,
    degree: `Ph.D`,
    img: <img src={kofi} alt="" />,
    details:
      "Edifico University commitment to excellence and innovation has equipped me with the skills and knowledge to succeed, and I am proud to call myself an alumnus.",
  },
  {
    person: `Kim-min Jae`,
    degree: `M.A, PH.D`,
    img: <img src={kim} alt="" />,
    details:
      "I am reminded of the countless opportunities it provided for growth, exploration, and self-discovery, making my time there truly transformative.",
  },
  {
    person: `Robb Stark`,
    degree: `Msc, Ph.d`,
    img: <img src={robb} alt="" />,
    details:
      "Edifico University's vibrant campus life and diverse student body made for an enriching experience, allowing me to connect with peers from various backgrounds and cultures",
  },
];

export default Testimonials;
