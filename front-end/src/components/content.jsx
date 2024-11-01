import React from "react";
import background from "../assets/hero-bg.jpg";

const Content = (props) => {
  return (
    <>
      {props.details.map((value, index) => (
        <div
          className="text-start flex flex-col justify-center items-center px-20 py-[20px]"
          key={index}
        >
          <img className="w-[400px]" src={background} alt={value.title} />
          <div className="px-6 py-4">
            <div className="text-3xl">{value.title}</div>
            <p className="font-bold">{value.description}</p>
          </div>
          <div>
            <p>{value.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Content;
