import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
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
          <header className="absolute top-4 z-[20] mx-auto flex w-full items-center justify-between">
            <div className="flex lg:ml-[14rem] top-4">
              <FaUserGraduate className="text-white size-7" />
              <h4 className="font-title text-white pl-2">Edifico</h4>
            </div>
            <div>
              <div className="mr-14 flex justify-between max-xl:hidden">
                <a
                  href="#home"
                  className="no-underline text-white p-3 justify-between font-semibold font-title text-[18px]"
                >
                  Home
                </a>
                <DropdownButton
                  id="dropdown-item-button"
                  className="p-3 justify-between font-semibold font-title text-[18px]"
                  title="Info"
                >
                  <Dropdown.Item as="button" className="font-name">
                    History
                  </Dropdown.Item>
                  <Dropdown.Item as="button" className="font-name">
                    Our Awards
                  </Dropdown.Item>
                  <Dropdown.Item as="button" className="font-name">
                    Alumni's
                  </Dropdown.Item>
                  <Dropdown.Item as="button" className="font-name">
                    VC's Vision
                  </Dropdown.Item>
                </DropdownButton>
                <a
                  href=""
                  className="no-underline text-white p-3 justify-between font-semibold font-title text-[18px]"
                >
                  Research
                </a>
                <DropdownButton
                  id="dropdown-item-button"
                  className="p-3 justify-between font-semibold font-title text-[18px]"
                  title="News & Events"
                >
                  <Dropdown.Item as="button" className="font-name">
                    New release for Journalist
                  </Dropdown.Item>
                  <Dropdown.Item as="button" className="font-name">
                    Sport Convention
                  </Dropdown.Item>
                  <Dropdown.Item as="button" className="font-name">
                    Filming in Edifico
                  </Dropdown.Item>
                  <Dropdown.Item as="button" className="font-name">
                    Edifico Profiles
                  </Dropdown.Item>
                  <Dropdown.Item as="button" className="font-name">
                    Campus Calender
                  </Dropdown.Item>
                  <Dropdown.Item as="button" className="font-name">
                    Ongoing Admission
                  </Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                  id="dropdown-item-button"
                  className="p-3 justify-between font-semibold font-title text-[18px]"
                  title="Admission"
                >
                  <Dropdown.Item as="button" className="font-name">
                    Undergraduate
                  </Dropdown.Item>
                  <Dropdown.Item as="button" className="font-name">
                    Postgraduate
                  </Dropdown.Item>
                  <Dropdown.Item as="button" className="font-name">
                    Direct Entry (D.E)
                  </Dropdown.Item>
                </DropdownButton>
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
