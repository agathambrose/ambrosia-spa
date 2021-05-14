import { GiFlowerTwirl } from "react-icons/gi";

const Header = () => {

  return (
    <header className="flex justify-center items-center md:fixed md:top-0 md:left-0 md:right-0 md:z-50 bg-white ">
      <h1 className="md:text-6xl text-4xl text-gray-900 font-Lora font-medium uppercase my-4 transition-shadow">
        Ambrosia Spa
      </h1>
      <span>
        <GiFlowerTwirl
          className="md:text-6xl text-3xl text-pink-700 animate-pulse"
        />
      </span>
    </header>
  );
};

export default Header;
