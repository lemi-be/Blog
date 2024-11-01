import "../App.css";
import { Link } from "react-router-dom";
export default function Foot() {
  return (
    <div className="grid gird-cols-2">
      {/* Links and Footer */}
      <div className="flex flex-row h-[300px] ">
        <div>
          <li className="list-none">
            <Link to="/">Blogger Way</Link>
          </li>
        </div>
        {/* Navigation List */}
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
          <p>Contact</p>
          <div>
            <p>New York 5000</p>
            <p>+2518886372</p>
            <p>Blogger Way</p>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div>
        <p>All Right reserved @CopyRight </p>
      </div>
    </div>
  );
}
