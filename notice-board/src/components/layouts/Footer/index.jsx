import React from 'react'
import { Footer } from './styles';
import footer_logo from "../../../assets/image/footer_logo.png"

function index() {
    return (
        <div>
            <Footer>
                <footer>
                    <div className="container">
                        <div className="footer-select">
                            <p className="footer-btn-plus"><a href="#none">관련사이트</a></p>                
                        </div>    
                        <h2 className="logo">
                            <img src={footer_logo} alt="하단 로고"></img>
                        </h2>
                        <address>
                            <p>
                                02707 서울특별시 성북구 정릉로 77 국민대학교 TEL 02.910.6495<br></br>
                                KOOKMIN UNIVERSITY, 77 JEONGNEUNG-RO, SEONGBUK-GU, SEOUL, 02707, KOREA<br></br>                  
                                COPYRIGHT© 2019 KOOKMIN UNIVERSITY. ALL RIGHTS RESERVED.
                            </p>
                        </address>                    
                    </div>
                </footer>
            </Footer>
        </div>
    )
}

export default index
