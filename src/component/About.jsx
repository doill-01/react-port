import React from "react";
import img from "../img/vi.jpeg";
import "./about.css";

const About = () => {
  return (
    <div className="main">
      <img src={img} alt="img" className="about-img"></img>
      <div className="about-text">
        <h2>FrontEnd Developer</h2>
        <h5>꾸준히 성장하는 주니어 개발자</h5>
		<div className="why_ft">
			<div><h3>왜 프론트앤드?</h3></div>
        <p>
          한국 무역협회에서 개발자 과정을 수료하던중 웹사이트를 만드는
          프로젝트를 진행한적이 있습니다. 프로젝트에서 프론트쪽을 담당한적이
          있었는데 프런트쪽을 담당하면서 화면ui가 바로바로 내가 원하는데로
          나타나는 것에 매력을 느꼈고 눈앞에 보이는 웹을 구현하는 것에 흥미를
          느껴 프론트 앤드직을 목표로 삼게 되었습니다. 
		  </p>
		  </div>
			<p>  현재는 프론트앤드 직을 위해 React, Html,Css,javascript 공부하고 계속 하고있고 다양한 프로젝트를 만들어보며 실력을 키우고 있습니다.</p>
		  
      </div>
    </div>
  );
};

export default About;
