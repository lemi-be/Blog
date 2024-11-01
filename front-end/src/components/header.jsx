import "../App.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="flex flex-row width-[100%] height-100 text-2xl justify-between bg-gray-200 p-[2rem] ">
      <div>
        <li className="list-none">
          <Link to="/">Blogger Way</Link>
        </li>
      </div>
      <div className="flex flex-row list-none gap-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </div>
      <div>
        <input
          className="bg-gray-300 border border-black rounded-[20px]"
          type="text"
        />
      </div>
    </div>
  );
}
