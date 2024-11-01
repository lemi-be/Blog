import React from "react";
import { Link } from "react-router-dom";
import CardData from "../assets/cardData";

import background from "../assets/hero-bg.jpg";

const Card = (props) => {
  if (!Array.isArray(props.details)) {
    return <p>No posts available</p>; // You can display a loading message or an empty state
  }

  return (
    <>
      {props.details.map((value, index) => (
        <Link to={`/post/${value.id}`}>
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
            key={index}
          >
            <img className="w-full h-48 object-cover" src={background} alt="" />
            <div className="px-6 py-4 ">
              <div className="font-bold text-xl mb-2">{value.title}</div>
              <p className="text-gray-700 text-base">{value.content}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Card;
