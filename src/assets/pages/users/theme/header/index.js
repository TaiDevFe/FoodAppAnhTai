import {memo, useState} from "react";
import "./style.scss";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import {ROUTERS} from "../../../../../utils/router";
import { CiMail } from "react-icons/ci";
import { formatter } from "../../../../../utils/fomater";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {

    const [menus, setMenus] = useState([
        {
            name:"Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name:"Cửa hàng",
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name:"Sản phẩm",
            path: ROUTERS.USER.HOME,
            isShowSubmenu:false,
            child:[
                {
                name:"Thịt",
                path:"",
            },
            {
                name:"Rau củ",
                path:"",
            },
            {
                name:"Thức ăn nhanh",
                path:"",
            },
        ]
        },
        {
            name:"Bài viết",
            path: ROUTERS.USER.HOME,
        },
        {
            name:"Liên hệ",
            path: ROUTERS.USER.HOME,
        },
    ])

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
        <div className="container" style={{display:"flex"}}>
            <div className="col-xl-3">
                <div className="header_logo">
                    <h1>TAISHOP</h1>
                </div>
            </div>
            <div className="col-xl-6">
                <nav className="header_menu">
                    <ul>
                    {
                        menus?.map((menu, menuKey) => (
                            <li className={menuKey === 0 ? "active" : ""} key={menuKey}>
                            <Link to={menu?.path}>{menu?.name}</Link>
                            {
                                menu.child && (
                                    <ul className="header_menu_dropdown">
                                    {menu.child.map((childItem ,childKey) => (
                                        <li key={`${menuKey}-${childKey}`}>
                                            <Link to={childItem.path}>{childItem.name}</Link>
                                        </li>
                                    ))}   
                                    </ul>
                                )
                            }
                            </li>
                        ) ) 
                    }                       
                    </ul>
                </nav>
            </div>
            <div className="col-xl-3">
                <div className="header_cart">
                    <div className="header_cart_price">
                        <span>{formatter(100000)}</span>
                    </div>
                    <ul>
                        <li>
                            <Link to="#">
                            <AiOutlineShoppingCart /> <span>5</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>     
        </div>   
        </>

        
    )
          
};

export default memo(Header);