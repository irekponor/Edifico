const Testimonials = () => {
  return (
    <div className="max-w-[1200px] m-auto md:pl-20 p-4 py-16 bg-custom-color">
      <h1 className="text-white font-marquis uppercase text-center text-[18px]">
        Edifico Rankings
      </h1>
      <div className="pl-28 pr-16 grid gap-16 sm:grid-cols-4">
        <div>
          <h3 className="font-name text-white">#3</h3>
          <p className="font-name text-white">
            Top public national Universities
          </p>
        </div>
        <div>
          <h3 className="font-name text-white">#3</h3>
          <p>Source: Mmh</p>
        </div>
        <div>
          <h3 className="font-name text-white">#3</h3>
          <p>Source: Mmh</p>
        </div>
        <div>
          <h3 className="font-name text-white">#3</h3>
          <p>Source: Mmh</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
