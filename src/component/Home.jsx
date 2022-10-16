// import Typical from 'react-typical'
import "./home.css";
import Typewriter from "typewriter-effect";
import React, { useState } from "react";
import img from "../img/aa.png";

const Home = () => {
  const [state] = useState({
    title: "안녕하세요 저는",
    // titleTwo:"저는",
    titleThree: "개발자입니다",
    // image: "../img/img1.png",
  });
  return (
    <div className="mainhome">
      <div className="mainhome-intro">
        <h2>
          <div className="title">{state.title}</div>
          <br />
        </h2>
        <br></br>
        <div className="text">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "트렌디한 기술을 배우고 공부하는",
                "팀원들과 소통을 즐기는",
                "사용자의 입장에서 편한 서비스를 제공하는",
              ],
            }}
          />
        </div>
        <br></br>
        <h2>
          <div className="titleThree">{state.titleThree}</div>
        </h2>
      </div>
      <div className="home-image">
        <img className="homemain-image" src={img}alt="spiderman"></img>
      </div>
    </div>
  );
};

export default Home;
