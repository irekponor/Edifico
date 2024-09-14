const Abouttext1 = ({ img, title1 }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full rounded-xl group hover:bg-gradient-to-l from-gray-200 to-custom-color">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="font-name font-semibold text-white text-center pt-3">
          {title1}
        </h3>
        <p className="font-name pb-0 pt-2 text-white text-center">
          "The Fico Sports Center is our university's athletic hub, featuring
          state-of-the-art facilities, including basketball courts, soccer
          fields, and a fitness center. Ranked Best University Sports Facility
          for July 2024 by Sports Facilities Magazine (SFM), it's the perfect
          spot for students to play, watch, and cheer on their favorite teams."
        </p>
      </div>
    </div>
  );
};

export default Abouttext1;
