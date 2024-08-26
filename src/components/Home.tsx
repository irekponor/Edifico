import { FaUserGraduate } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      <div className="md:block hidden">
        <header className="fixed top-2 z-[20] mx-auto flex w-full items-center justify-between">
          <div className="flex">
            <FaUserGraduate className="size-6" />
            <h3>hsh</h3>
          </div>
          <div>
            <div>
              <a href="">Home</a>
              <a href="">Info</a>
              <a href="">Program</a>
              <a href="">Faculty</a>
              <a href="">Testimonial</a>
              <a href="">Contact</a>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Home;
