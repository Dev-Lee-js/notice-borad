import React from 'react'
import { Header } from './styles';
import logo from '../../../assets/image/logo.png';
import sub_logo from '../../../assets/image/sub_logo.png';
import btn_menu from '../../../assets/image/btn_menu.png';

function index() {
    return (
        <div>
            <Header>
                <header>
                    <div className="container">
                        <h2 className="logo">
                            <a href="#none"><img src={logo} alt="국민대학교 메인 홈페이지"></img></a>
                            <a href="#none"><img src={sub_logo} alt="국민대학교 대학혁신추진단 홈페이지"></img></a>
                        </h2>
                        <div className="gnb">
                            <a href="#none"><img src={btn_menu} alt="메뉴버튼"></img></a>
                            <ul>
                                <li><a href="#none">사업단 소개</a></li>
                                <li><a href="#none">사업안내</a></li>
                                <li><a href="#none">게시판</a></li>
                                <li><a href="#none">로그인</a></li>                    
                            </ul>                
                        </div>                     
                    </div>
                    <div className="lnb x-center">
                        <ul>                
                            <li>자료실</li>
                        </ul>
                    </div>  
                </header>
            </Header>
        </div>
    )
}

export default index
