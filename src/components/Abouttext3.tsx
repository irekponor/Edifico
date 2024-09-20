interface AboutTextProps {
  img: string;
  title3: string;
}

const Abouttext3: React.FC<AboutTextProps> = ({ img, title3 }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full rounded-xl group hover:bg-gradient-to-l from-gray-200 to-custom-color">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="font-name font-semibold text-white text-center pt-3">
          {title3}
        </h3>
        <p className="font-name pb-0 pt-2 max-md:hidden text-white text-center">
          The Fico Chapel is our university's spiritual hub, offering a peaceful
          and inclusive space for worship, reflection, and community. Making it
          the perfect spot for students to connect with their faith, find
          solace, and grow spiritually.
        </p>
      </div>
    </div>
  );
};

export default Abouttext3;
