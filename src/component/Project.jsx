import React from "react";
import book from "../img/bookworm.png";
import temp from "../img/temp.png"
import todo from "../img/todo.png"
import rsp from "../img/rsp.png"
import shopping from "../img/shopping.png"
import "./project.css";
import {  Link } from "react-router-dom";


const Project = () => {
  const style = {
    maxWidth: "100%",
    height: "248px",
  };


  return (
    <div className="card">
      <div className="card__container">
        <article className="card__article">
          <div className="card__data">
            <img src={book} className="card__img" style={style} alt="card" />
            <h1 className="card__title">spring 도서판매 프로젝트</h1>
            <p className="card__description" style={{cursor:"pointer"}} onClick={()=>{
				window.location.href ="https://github.com/kitateam2/team2-project"
			}}>코드보러가기</p>
            <Link to="/Portfolio1">
              <button className="button">사이트이동</button>
            </Link>
          </div>
        </article>

        <article className="card__article">
          <div className="card__data">
            <img src={todo} alt="card" className="card__img" style={style} />
            <h1 className="card__title">to do list 프로젝트</h1>
            <p className="card__description" style={{cursor:"pointer"}}>코드보러가기</p>
            <Link to="/ToDoList">
              <button className="button">사이트이동</button>
            </Link>
          </div>
        </article>

		

        <article className="card__article">
          <div className="card__data">
            <img src={temp} alt="card" className="card__img" style={style} />
            <h1 className="card__title">날씨앱</h1>
			<p className="card__description" onClick={() => {
                window.location.href = "https://github.com/doill-01/temp";
              }} style={{cursor:"pointer"}}>코드보러가기</p>
		
            <button
              onClick={() => {
                window.location.href = "https://velvety-centaur-c45298.netlify.app";
              }}
            className="button">
              사이트이동
            </button>
          </div>
        </article>

		<article className="card__article">
          <div className="card__data">
            <img src={shopping} alt="card" className="card__img" style={style} />
            <h1 className="card__title">쇼핑몰프로젝트</h1>
			<p className="card__description" onClick={() => {
                window.location.href = "https://github.com/doill-01/shopping";
              }} style={{cursor:"pointer"}}>코드보러가기</p>
		
            <button
              onClick={() => {
                window.location.href = "https://thriving-fenglisu-366553.netlify.app";
              }}
            className="button">
              사이트이동
            </button>
          </div>
        </article>

		<article className="card__article">
          <div className="card__data">
            <img src={rsp} alt="card" className="card__img" style={style} />
            <h1 className="card__title">가위바위보게임</h1>
			<p className="card__description" onClick={() => {
                window.location.href = "https://github.com/doill-01/rsp";
              }} style={{cursor:"pointer"}}>코드보러가기</p>
		
            <button
              onClick={() => {
                window.location.href = "https://deft-travesseiro-a30dcd.netlify.app";
              }}
            className="button">
              사이트이동
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Project;
