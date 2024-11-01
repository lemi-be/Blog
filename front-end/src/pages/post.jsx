import React, { useState, useEffect } from "react";
import CardData from "../assets/cardData";
import Header from "../components/header";
import Foot from "../components/footer";
import Content from "../components/content";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();

  const [postData, setPostData] = useState([{}]);

  const filteredContent = postData.filter(
    (card) => card.id === Number(id)
    //  // Extract the 'id' param from the URL
    // Convert 'id' from string to number for comparison
  );

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

  return (
    <div>
      <Header />
      <Content details={filteredContent} />

      <Foot />
    </div>
  );
};

export default Post;
