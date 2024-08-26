import { FaUserGraduate } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      <div className="md:block hidden">
        <header className="fixed top-4 z-[20] mx-auto flex w-full items-center justify-between">
          <div className="flex pl-24">
            <FaUserGraduate className="size-6" />
            <h4 className="font-title pl-2">Edifico</h4>
          </div>
          <div>
            <div className="mr-12">
              <a
                href="#home"
                className="no-underline p-3 justify-between font-semibold font-title text-[22px]"
              >
                Home
              </a>
              <a
                href=""
                className="no-underline p-3 justify-between font-semibold font-title text-[22px]"
              >
                Info
              </a>
              <a
                href=""
                className="no-underline p-3 justify-between font-semibold font-title text-[22px]"
              >
                Program
              </a>
              <a
                href=""
                className="no-underline p-3 justify-between font-semibold font-title text-[22px]"
              >
                Faculty
              </a>
              <a
                href=""
                className="no-underline p-3 justify-between font-semibold font-title text-[22px]"
              >
                Testimonial
              </a>
              <a
                href=""
                className="no-underline p-3 justify-between font-semibold font-title text-[22px]"
              >
                Contact
              </a>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Home;
