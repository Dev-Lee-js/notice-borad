import React from 'react'
import { Section } from "./styles"
import rss from '../../assets/image/rss.png';
import btn_board_search from '../../assets/image/btn_board_search.gif';
import btn_pagenation_prev from '../../assets/image/btn_pagenation_prev.png';
import btn_pagenation_next from '../../assets/image/btn_pagenation_next.png';

function index() {
    return (
        <div>
            <Section>
                <section>
                    <div className="container">
                        <div className="page-title">
                            <h2>
                                자료실
                            </h2>
                            <a href="#none"><img src={rss} alt="rss"></img></a>
                        </div>      
                        <div className="content">
                            <div className="search">
                                <input type="text" placeholder="제목, 내용 검색"></input>
                                <a href="#none"><img src={btn_board_search} alt="검색 이미지"></img></a>
                            </div>
                            <div className="table">
                                <div className="table-head">
                                    <ul>
                                        <li>번호</li>
                                        <li>제목</li>
                                        <li>작성일</li>
                                    </ul>
                                </div>
                                <div className="table-list">
                                    <ul>
                                        <li className="number">7</li>
                                        <li className="subject"><a href="#none">2021학년도 신입생 및 재학생 실태조사 실시</a><span className="list-new"></span></li>
                                        <li className="date">2021-05-08</li>                   
                                    </ul>   
                                    <ul>
                                        <li className="number">7</li>
                                        <li className="subject"><a href="#none">2021학년도 신입생 및 재학생 실태조사 실시</a><span className="list-new"></span></li>
                                        <li className="date">2021-05-08</li>                   
                                    </ul>
                                    <ul>
                                        <li className="number">7</li>
                                        <li className="subject"><a href="#none">2021학년도 신입생 및 재학생 실태조사 실시</a><span className="list-new"></span></li>
                                        <li className="date">2021-05-08</li>                   
                                    </ul>
                                    <ul>
                                        <li className="number">7</li>
                                        <li className="subject"><a href="#none">2021학년도 신입생 및 재학생 실태조사 실시</a><span className="list-new"></span></li>
                                        <li className="date">2021-05-08</li>                   
                                    </ul>
                                    <ul>
                                        <li className="number">7</li>
                                        <li className="subject"><a href="#none">2021학년도 신입생 및 재학생 실태조사 실시</a><span className="list-new"></span></li>
                                        <li className="date">2021-05-08</li>                   
                                    </ul>
                                    <ul>
                                        <li className="number">7</li>
                                        <li className="subject"><a href="#none">2021학년도 신입생 및 재학생 실태조사 실시</a><span className="list-new"></span></li>
                                        <li className="date">2021-05-08</li>                   
                                    </ul>
                                                        
                                </div>
                                <div className="page-number">
                                    <ul>
                                        <li>
                                            <a href="#none"><img src={btn_pagenation_prev} alt="페이지 넘김"></img></a>
                                        </li>
                                        <li>
                                            <span>1</span>
                                            <span>/</span>
                                            <span>1</span>
                                        </li>
                                        <li>
                                            <a href="#none"><img src={btn_pagenation_next} alt="페이지 넘김"></img></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>  
                        <div className="board-period">
                            <p>
                                <a href="#none">
                                    게시판 별 게시물 보존기한 안내
                                </a>
                            </p>
                        </div>            
                    </div>
                </section>
            </Section>
        </div>
    )
}

export default index
