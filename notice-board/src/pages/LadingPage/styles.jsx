import styled from "styled-components";
import ico_board_new from "../../assets/image/ico_board_new.png"

export const Section = styled.section`
section{height: 965px;}
section .page-title{height: 130px;text-align: center;margin-bottom: 38px;}
section .page-title h2{color: #222;display: inline-block;font-size: 48px;font-weight: bold;line-height: 1;padding-top: 80px;}
section .page-title a{margin-left: 10px;}
section .page-title img{width: 50px;}
section .content{height: 580px;margin: 0 auto;}
section .content .search{width: 360px;height: 37px;float: right;border-bottom: 3px solid #3c3c3c;}
section .content .search input{border: 0;margin-left: 27px;}
section .content .search input:focus{outline: none;}
section .content .search img{width: 27px;float: right;}
section .content .table{padding-top: 68px;}
section .content .table .table-head{height: 59px;background: #112d6c;border-radius: 35px;color:white;line-height: 59px;}
section .content .table .table-head ul{text-align: center;}
section .content .table .table-head ul li{display: inline-block;width: 70.5%;}
section .content .table .table-head ul li:first-child,
section .content .table .table-head ul li:last-child{width: 11%;}
section .content .table .table-list ul{border-bottom:1px solid #ccc ;}
section .content .table .table-list ul li{padding: 21px 0 18px 0;text-align: center;line-height: 22px;color: #666;vertical-align: middle;}
section .content .table .table-list ul li.number{float: left;width: 185px;}
section .content .table .table-list ul li.subject{display: inline-block;}
section .content .table .table-list ul li.subject a{display: inline-block;vertical-align: middle;padding-right: 22px;}
section .content .table .table-list ul li.subject .list-new{display: inline-block;background: url(${ico_board_new}) center no-repeat;width: 28px; height: 28px; background-size: cover;top: 19px;vertical-align: middle;}
section .content .table .table-list ul li.date{float: right;width: 185px;}
section .content .page-number{margin-top: 45px;}
section .content .page-number ul li{vertical-align: middle;display: inline-block;line-height: 1;margin-right: 25px;}
section .content .page-number ul li a img{width: 20px;height: 40px;}
section .board-period{text-align: right;margin: 75px auto 0 auto;}
section .board-period a{background-color: #112d6c;color: white;padding: 10px 20px;
`;