import React from 'react';
import "./project1.css"
import book from "../img/bookworm.png"
import video from "../img/record.mp4"





const Portfolio1 = () => {


	return (
<div className="book_main">
        <div className="detail">
			<div className='cont'>
            <img className="detail__img" src={book} alt=""/>
			</div>
            
            <table className="table">
				<tbody>
                <tr>
                <th className="table__th">제작기간</th>
                <td className="table__td">１개월</td>
                </tr>
                <tr>
                <th className="table__th">담당업무</th>
                <td className="table__td">메인홈제작（회원등록/로그인）도서결제기능 (장바구니/위시리스트)</td>

                </tr>
                <tr>
                    <th className="table__th">인원수</th>
                    <td className="table__td">5명</td>
                </tr>
                <tr>
                    <th className="table__th">프로젝트내용</th>
                    <td className="table__td">온라인서점</td>
                </tr>
				</tbody>
            </table>
			
            <h3 className="detail__subtitle detail__center">사용한기술</h3>
            <ul className="icon">
                <li className="icon__html icon__box">html</li>
                <li className="icon__css icon__box">css</li>
                <li className="icon__java icon__box">java</li>
                <li className="icon__js icon__box">javascript</li>
                <li className="icon__jquery icon__box">jquery</li>
                {/* <li className="devicon-vscode-plain">Visual Studio Code</li> */}
                <li className="icon__spring icon__box">Spring</li>
                <li className="icon__Mybatis icon__box">Mybatis</li>
                <li className="icon__Oracle icon__box">Oracle</li>
            </ul>
            <div className="detail__block">
                <div className="detail__box">
                </div>
                <ol className="detail__box">
                    <h3 className="detail__subtitle detail__h3">제작순서</h3>
                    <li className="detail__text">공정도 및 UI제작</li>
                    <li className="detail__text">ERD작성 및 담당업무 배정</li>
                    <li className="detail__text">코드작성</li>
                    <li className="detail__text">코드작성 및 발표</li>
                </ol>
                <div className="detail__box">
                        <h4 className="detail__subtitle detail__h4">시연영상</h4>
                        <p className="detail__text">화면을 크게 키워주세요
                        </p>
						<div className='player-wrapper'>
                <video controls
                    src={video}
                    width="820">
                </video>
				</div>
        
                    </div> 
                    
                    

      
                </div>
            </div>
        </div>
	);
};

export default Portfolio1;