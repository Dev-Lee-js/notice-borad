import React from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LadingPage/index";
import LoginPage from "./pages/LoginPage/index";
import RegisterPage from "./pages/RegisterPage/index";
import Header from "./components/layouts/Header/index";
import Footer from "./components/layouts/Footer/index";
import { createGlobalStyle } from 'styled-components';
import './App.css';

const GlobalStyle = createGlobalStyle`
@charset "utf-8";

/* 여백 초기화 */
body,div,ul,li,dl,dd,dt,ol,h1,h2,h3,h4,h5,h6,input,fieldset,legend,p,select,table,th,td,tr,textarea,button,form,figure,figcaption{margin:0; padding:0;}

/* a 링크 초기화 */
a {color: #222; text-decoration: none;}
a:hover {color: #2698cb;}

/* 폰트 초기화 */
body, input, textarea, select, button, table {font-family:'Noto Sans KR', AppleSDGothicNeo-Regular,'Malgun Gothic','맑은 고딕',dotum,'돋움',sans-serif; color: #222; font-size: 16px; line-height: 1.5;}

/* 폰트 스타일 초기화 */
em,address {font-style: normal;}

/* 블릿기호 초기화 */
ul,li,ol {list-style:none;}

/* 제목 태그 초기화 */
h1,h2,h3,h4,h5,h6 {font-size: 16px; font-weight: normal;}

/* 테두리 초기화 */
img,fieldset {border:0 none;}

/* 버튼 초기화 */
button {border: 0;}

/* 반응형 */
video,img {width: 100%;}

/* clearfix */
.clearfix{*zoom:1;}
.clearfix:before, .clearfix:after {display: block; content: '';line-height: 0;}
.clearfix:after {clear: both;}

/* IR 효과 */
.ir_pm {display:block; overflow:hidden; font-size:0; line-height:0; text-indent:-9999px;} /* 의미있는 이미지의 대체 텍스트를 제공하는 경우(Phark Method) */
.ir_wa {display:block; overflow:hidden; position:relative; z-index:-1; width:100%; height: 100%;} /* 의미있는 이미지의 대체 텍스트로 이미지가 없어도 대체 텍스트를 보여주고자 할 때(WA IR) */
.ir_so {overflow: hidden; position:absolute; width:0; height:0; line-height:0; text-indent:-9999px;} /* 대체 텍스트가 아닌 접근성을 위한 숨김 텍스트를 제공할 때 */

/* 아이콘 이미지 최적화 작업 */
.icon {background-image: url(../img/icon.png);}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
       only screen and (min-device-pixel-ratio: 1.5),
       only screen and (min-resolution: 1.5dppx){
            .icon {background-image: url(../img/icon@2.png); background-size: 500px;}
       }

/* input style */
input {background-image: none;}
input[type=button],
input[type=reset],
input[type=text],
input[type=password],
input[type=submit],
input[type=search],
input[type=tel],
input[type=email] {
    -webkit-appearance: none;
    border-radius: 0
}
input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}
input:checked[type=checkbox] {
    background-color: #666;
    -webkit-appearance: checkbox
}

/* 셀렉트 메뉴 로그인 스타일 */
.ui_select1 { 
    background: #F8F8F8; height: 26px; border: 1px solid #d9d9d9;
    padding: 0 5px; border-radius: 0;
}
/* 셀렉트 메뉴 메인 스타일 */
.ui_select2 { 
    width: 100%; box-sizing: border-box;
    background: #2c2f34; color: #fff; 
    display: inline-block; height: 36px; margin: 0; padding: 0 10px;
    vertical-align: middle; text-align: left; white-space: nowrap;
    font-family: inherit; font-size: inherit; border: 0 none;
    background: #2c2f34 url(../img/down.svg) no-repeat right 10px center;
    background-size: 10px; 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
/* 로그인 텍스트 박스 스타일1 */
.ui_input1 { 
    border: 1px solid #d9d9d9; width: 200px; height: 26px;
    font-size: 16px; text-indent: 14px; background: #f8f8f8;
    vertical-align: middle;
}
/* 로그인 텍스트 박스 스타일1 */
.ui_input2 { 
    border: 1px solid #d9d9d9; width: 100px; height: 26px;
    font-size: 16px; text-indent: 14px; background: #f8f8f8;
    vertical-align: middle;
}
/* 메인 텍스트 박스 스타일1 */
.ui_input3 { 
    background: #2c2f34; color: #fff; 
    border: 0; width: 100%; height: 36px; padding: 0 10px;
}
.form_inline .form_group {display: inline-block; vertical-align: middle;}

.container {position: relative; width: 1280px; margin: 0 auto;}

.x-center{position: absolute;left: 50%;transform: translateX(-50%);}
.y-center{position: absolute;top: 50%;transform: translatey(-50%);}
.xy-center{position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);}


`;

function App() {
  return (    
    <>
      <GlobalStyle />
      <Header />      
         <BrowserRouter> 
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/register" component={RegisterPage}/>
          </Switch>
        </BrowserRouter>         
      <Footer />
    </>
  );
}

export default App;
