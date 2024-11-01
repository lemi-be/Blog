import "../App.css";
import Foot from "../components/footer.jsx";
import Header from "../components/header.jsx";
import { useEffect } from "react";

import AboutContent from "../components/aboutContent.jsx";
const About = () => {
  useEffect(() => {
    document.title = "Home - My Website";
  }, []);
  return (
    <div>
      <Header />
      <AboutContent />

      <Foot />
    </div>
  );
};
export default About;
