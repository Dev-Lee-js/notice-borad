import styled from "styled-components";
import footer_btn_more from "../../../assets/image/footer_btn_more.png"

export const Footer = styled.footer`

footer{height: 170px;width: 100%;background-color: #222;}
footer h2{float: left; margin: 40px 0 0 10px;}
footer h2 img{width: 185px;}
footer address{margin: 55px 0 0 35px;float: left;}
footer address p{color: #777674;font-size: 14px;}
footer .footer-select{float: right;width: 238px;border-bottom: 1px solid #777674;margin-top: 58px;}
footer .footer-select .footer-btn-plus{margin: 0px 0px 15px 18px;}
footer .footer-select .footer-btn-plus a{color: #bebebe;}
footer .footer-select .footer-btn-plus a:before{position: absolute;content: '';right: 20px;top: 63px;background: url(${footer_btn_more}) center no-repeat;width: 16px;height: 16px;background-size: cover;}
`;