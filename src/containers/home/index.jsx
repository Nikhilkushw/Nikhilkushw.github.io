import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
const Home = () => {
  const navigate = useNavigate();
  console.log(navigate);
  const handleNavigateToContactMe = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Nikhil
          <br />
          Front end developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)"
        }}
        end={{
          transform: "translateX(0px)"
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMe}>Hire me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
