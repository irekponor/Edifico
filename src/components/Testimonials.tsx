import Rank from "./Rank";
import Testitem from "./Testitem";

const data = [
  {
    name: `Anita Adarabioro`,
    degree: `Bsc, Msc`,
    img: ``,
    details:
      "I am filled with a mix of sadness and gratitude, knowing I will miss the exceptional education and experiences it provided.",
  },
  {
    name: `John statham`,
    degree: `Bsc, Msc, Phd`,
    img: ``,
    details:
      "The rigorous academic programs at Edufico University prepared me well for my future endeavors, and I am thankful for the opportunity to have studied there.",
  },
  {
    name: `Kofi Kulumaye`,
    degree: `Phd`,
    img: ``,
    details:
      "Edufico University commitment to excellence and innovation has equipped me with the skills and knowledge to succeed, and I am proud to call myself an alumnus.",
  },
  {
    name: `Toretto Trudeau`,
    degree: `Msc, Phd`,
    img: ``,
    details:
      "I am reminded of the countless opportunities it provided for growth, exploration, and self-discovery, making my time there truly transformative.",
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
