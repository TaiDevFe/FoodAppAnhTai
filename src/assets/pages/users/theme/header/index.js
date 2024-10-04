import {memo} from "react";
import "./style.scss";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { formatter } from "../../../../../utils/fomater";

const Header = () => {
    return (
        <>
        <div className="header_top">
            <div className="container">
            <div className="row">
                <div className="col-6 header_top_left">
                    <ul>
                        <li>
                        <CiMail />
                        Hello@gmail.com
                        </li>
                        <li>Miễn phí đơn từ {formatter(200000)}</li>
                    </ul>
                </div>
                <div className="col-6 header_top_right">
                    <ul>
                        <li>
                        <Link to={""}>
                            <AiOutlineFacebook />
                        </Link>
                        </li>
                        <li>
                        <Link to={""}>
                            <FaInstagram />
                        </Link>
                        </li>
                        <li>
                        <Link to={""}>
                            <CiLinkedin />
                        </Link>
                        </li>
                        <li>
                        <Link to={""}>
                            <AiOutlineGlobal />
                        </Link>
                        </li>
                        <li>
                        <Link to={""}>
                          <AiOutlineUser />  
                        </Link>
                        <span>Đăng nhập</span>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        <div className="row">
        <div className="container">
            <div className="col-lg-3 col-xl-3">
                LOGOS
            </div>
        </div>     
        </div>   
        </>

        
    )
          
};

export default memo(Header);