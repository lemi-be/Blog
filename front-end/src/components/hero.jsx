import "../App.css";
import { Link } from "react-router-dom";
import background from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <div className="flex flex-row max-w-[100vw] gap-20 p-[20px] justify-center">
      <div className="max-w-[50vw] text-start place-content-center">
        <p className="text-[2rem] pb-5 ">Where does it come from?</p>
        <p className="text-balance text-xl w-[500px] leading-loose">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
        <button className="my-10 py-2 px-4 border border-black hover:bg-black hover:text-white">
          Read More
        </button>
      </div>
      <div className="flex object-contain w-[300px] justify-center items-center">
        <div className="object-contain w-[300px] ">
          <img src={background} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
