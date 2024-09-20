interface AboutTextProps {
  img: string;
  title2: string;
}

const Abouttext2: React.FC<AboutTextProps> = ({ img, title2 }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full rounded-xl group hover:bg-gradient-to-l from-gray-200 to-custom-color">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="font-name font-semibold text-white text-center pt-3">
          {title2}
        </h3>
        <p className="font-name pb-0 pt-2 max-md:hidden text-white text-center">
          The Fico Mall is our university's retail hub, featuring a diverse
          range of stores, restaurants, and entertainment options. Ranked Best
          University Mall for July 2024 by Retail Insights Magazine (RIM), it's
          the perfect spot for students to shop, dine, and socialize."
        </p>
      </div>
    </div>
  );
};

export default Abouttext2;
