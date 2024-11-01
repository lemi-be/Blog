import "../App.css";
import Card from "./postCard";
import CardData from "../assets/cardData";
import { useState, useEffect } from "react";

const LatestPosts = () => {
  const [postData, setPostData] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:8080/posts");
        const data = await result.json();

        setPostData(data);
        // console.log(post);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(postData);

  const filteredCards = postData.filter((card) => {
    const cardDate = new Date(card.date);
    const startDate = new Date("2024-10-01");
    const endDate = new Date("2024-10-15");
    return cardDate >= startDate && cardDate <= endDate;
  });

  return (
    <div>
      <div className="pb-20">
        <h1 className="text-3xl">Latest Post</h1>
        <div className="flex justify-center pt-[20px]  bg-gray-100 gap-5">
          <Card details={filteredCards.length ? filteredCards : postData} />
          {/* {filteredCards.splice(4)} /> */}
        </div>
      </div>
    </div>
  );
};
export default LatestPosts;
