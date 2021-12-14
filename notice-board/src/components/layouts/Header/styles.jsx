import styled from "styled-components";
import sub_visual_board from "../../../assets/image/sub_visual_board.jpg"

export const Header = styled.header`
header{height: 355px;width: 100%;background: url(${sub_visual_board}) center top no-repeat;background-size:cover;color: white;position: relative;}
header h2.logo{float: left;padding: 38px 0 0 80px;}
header h2.logo img{width: 170px;}
header .gnb{float: right;padding: 53px 20px 0 0;}
header .gnb a img{width: 0;}
header .gnb ul li{display: inline-block;margin-right: 4.79vw;}
header .gnb ul li a{color: white;}
header .lnb{bottom: -1px;}
header .lnb ul{height: 68px;}
header .lnb ul li{width:316px;float: left;text-align: center;border: 1px solid #c6c6c6;height: 68px;line-height: 68px;font-size: 22px;border-top: none;background-color: white;color: black;}
header .lnb ul li:last-child{background: #193b8f url(../image/lnb_bg.png) center right no-repeat;color: white;border: none;}
`;