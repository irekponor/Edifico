const Abouttext = ({ img, title, title1, title2, title3 }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full rounded-xl group hover:bg-gradient-to-l from-gray-200 to-custom-color">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="font-name font-semibold text-white text-center pt-3">
          {title}
        </h3>
        <p className="font-name pb-0 pt-2 max-md:hidden text-white text-center">
          The Fico theatre is the movie centre of the university where students
          gather to watch their favourite tv shows or movies. It was also ranked
          best cinema for july 2024 according to Marquis Movie Houses (MMH)
          Ranking
        </p>
        <h3 className="font-name font-semibold text-white text-center pt-3">
          {title1}
        </h3>
        <p className="font-name pb-0 pt-2 max-md:hidden text-white text-center">
          The Fico theatre is the movie centre of the university where students
          gather to watch their favourite tv shows or movies. It was also ranked
          best cinema for july 2024 according to Marquis Movie Houses (MMH)
          Ranking
        </p>
        <h3 className="font-name font-semibold text-white text-center pt-3">
          {title2}
        </h3>
        <p className="font-name pb-0 pt-2 max-md:hidden text-white text-center">
          The Fico theatre is the movie centre of the university where students
          gather to watch their favourite tv shows or movies. It was also ranked
          best cinema for july 2024 according to Marquis Movie Houses (MMH)
          Ranking
        </p>
        <h3 className="font-name font-semibold text-white text-center pt-3">
          {title3}
        </h3>
        <p className="font-name pb-0 pt-2 max-md:hidden text-white text-center">
          The Fico theatre is the movie centre of the university where students
          gather to watch their favourite tv shows or movies. It was also ranked
          best cinema for july 2024 according to Marquis Movie Houses (MMH)
          Ranking
        </p>
      </div>
    </div>
  );
};

export default Abouttext;
