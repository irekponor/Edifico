import movie from "../assets/movie.jfif";
import Abouttext from "./Abouttext";
import ball from "../assets/ball.jfif";
import mall from "../assets/mall.jfif";
import church from "../assets/church.jfif";

const About = () => {
  return (
    <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl uppercase mt-6 font-marquis font-bold text-center text-custom-color">
        The School's Campus
      </h1>
      <p className="text-center text-black text-[18px] font-marquis py-8 px-14">
        These are the most visited areas on campus
      </p>
      <div className="pl-16 pr-16 grid gap-16 sm:grid-cols-2">
        <Abouttext img={movie} title="Fico Theatre" />
        <Abouttext img={ball} title1="Fico Sports Center" />
        <Abouttext img={mall} title2="Fico Mall" />
        <Abouttext img={church} title3="Fico Church" />
      </div>
    </div>
  );
};

export default About;
