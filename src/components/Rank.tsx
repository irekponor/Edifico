const Rank = () => {
  return (
    <div className="max-w-[1200px] m-auto md:pl-20 p-4 py-16 bg-custom-color">
      <h1 className="text-white font-marquis uppercase text-center text-[18px]">
        Edifico Rankings
      </h1>
      <div className="mt-10 pl-28 pr-16 grid gap-16 sm:grid-cols-4">
        <div>
          <h3 className="font-name text-white">#3</h3>
          <p className="font-name text-white">
            Top public national Universities
          </p>
          <p className="font-name text-white"> Source: Forbes </p>
        </div>
        <div>
          <h3 className="font-name text-white">#1</h3>
          <p className="font-name text-white">
            Most followed university on socials
          </p>
          <p className="font-name text-white"> Source: Time Magazine </p>
        </div>
        <div>
          <h3 className="font-name text-white">#2</h3>
          <p className="font-name text-white">Top University in research</p>
          <p className="font-name text-white pt-4"> Source: Amazon </p>
        </div>
        <div>
          <h3 className="font-name text-white">#6</h3>
          <p className="font-name text-white">Best University Overall</p>
          <p className="font-name text-white pt-4"> Source: Academia </p>
        </div>
      </div>
    </div>
  );
};

export default Rank;
