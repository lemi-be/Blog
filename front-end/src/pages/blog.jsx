import "../App.css";
import Header from "../components/header.jsx";
import { useEffect } from "react";
import CardData from "../assets/cardData.jsx";
import Card from "../components/postCard.jsx";
import Foot from "../components/footer.jsx"
const Blog = () => {
    useEffect(() => {
        document.title = "Home - My Website";
      }, []);
  return (
    <div>
      <Header />
      <div className="pb-20">
        <h1 className="text-3xl">Latest Post</h1>
        <div className="flex justify-center pt-[20px] h-max bg-gray-100 gap-5 flex-row flex-wrap">
          <Card details={CardData} />
        </div>
      </div>
      <Foot />
    </div>
  );
};
export default Blog;
