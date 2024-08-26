import { FaUserGraduate } from "react-icons/fa6";
import Hometext from "./Hometext";

const Home = () => {
  return (
    <div id="home">
      <img
        className="w-full h-screen object-cover object-top"
        src="https://cdn.pixabay.com/photo/2021/10/11/04/08/university-6699377_1280.jpg"
        alt=""
      />
      <div className="w-full absolute h-screen top-0 left-0 bg-custom-color/45">
        <div className="md:block hidden">
          <header className="fixed top-4 z-[20] mx-auto flex w-full items-center justify-between">
            <div className="flex lg:ml-[14rem] top-4">
              <FaUserGraduate className="text-white size-7" />
              <h4 className="font-title text-white pl-2">Edifico</h4>
            </div>
            <div>
              <div className="mr-14">
                <a
                  href="#home"
                  className="no-underline text-white p-3 justify-between font-semibold font-title text-[18px]"
                >
                  Home
                </a>
                <a
                  href=""
                  className="no-underline text-white p-3 justify-between font-semibold font-title text-[18px]"
                >
                  Info
                </a>
                <a
                  href=""
                  className="no-underline text-white p-3 justify-between font-semibold font-title text-[18px]"
                >
                  Program
                </a>
                <a
                  href=""
                  className="no-underline text-white p-3 justify-between font-semibold font-title text-[18px]"
                >
                  Faculty
                </a>
                <a
                  href=""
                  className="no-underline text-white p-3 justify-between font-semibold font-title text-[18px]"
                >
                  Testimonial
                </a>
                <a
                  href=""
                  className="no-underline text-white p-3 justify-between font-semibold font-title text-[18px]"
                >
                  Contact
                </a>
              </div>
            </div>
          </header>
        </div>
        <Hometext />
      </div>
    </div>
  );
};

export default Home;
