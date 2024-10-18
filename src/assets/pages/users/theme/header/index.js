import {memo, useEffect, useState} from "react";
import "./style.scss";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import {ROUTERS} from "../../../../../utils/router";
import { CiMail } from "react-icons/ci";
import { formatter } from "../../../../../utils/fomater";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const categories = [
    "Thịt tươi",
    "Rau củ",
    "Nước trái cây",
    "Trái cây",
    "Hải sản",
];

const Header = () => {
    const location = useLocation()
    const[isShowHumberger, setShowHumberger] = useState(false);
    const [isHome, setIsHome] = useState(location.pathname.length <= 1);
    const[isShowCategories, setShowCategories] = useState(isHome);
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

    useEffect(() => {
        const isHome = location.pathname.length <= 1 
        setIsHome(isHome);
        setShowCategories(isHome);
    }, [location]);

    return (
        <>
        <div 
        className={`humberger_menu_overlay${
            isShowHumberger ? "active" : ""
        }`}
        onClick={() => setShowHumberger(false)}
        > 
        </div>
        <div className={`humberger_menu_wrapper${
            isShowHumberger ? "show" : ""
        }`}
        >
            <div className="header_logo">
                <h1>TAISHOP</h1>
            </div>
            <div className="humberger_menu_cart">
                <ul>
                    <li>
                        <Link to={""}>
                            <AiOutlineShoppingCart /> <span>1</span>
                        </Link>
                    </li>
                </ul>
                <div className="header_cart_price">
                    Giỏ hàng : <span>ƠP{formatter(100000)}</span>
                </div>
            </div>
            <div className="humberger_menu_widget">
                <div className="header_top_right_auth">
                <Link to={""}>
                    <AiOutlineUser />Đăng nhập
                </Link>
                 </div>
             </div>
             <div className="humberger_menu_nav">
                <ul>
                    <li>Menu Item</li>
                </ul>
             </div>
             <div className="header_top_right_social">
                    <Link to={""}>
                        <AiOutlineFacebook />
                    </Link>
                    <Link to={""}>
                        <AiOutlineInstagram />
                    </Link>
                    <Link to={""}>
                        <AiOutlineLinkedin />
                    </Link>
                    <Link to={""}>
                        <AiOutlineGlobal />
                    </Link>
             </div>
             <div className="humberger_menu_contact">
                <ul>
                    <li>
                        <i className="fa fa-envelope">lehoanganhtai1115@gmail.com</i>
                    </li>
                    <li>
                        Miễn phí đơn từ {formatter(200000)}
                    </li>
                </ul>
             </div>
        </div>
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
        <div className="container">
        <div className="row">
        <div className="col-lg-3">
                <div className="header_logo">
                    <h1>TAISHOP</h1>
                </div>
            </div>
            <div className="col-lg-6">
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
            <div className="col-lg-3">
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
                <div className="humgberger_open">
                    <AiOutlineMenu onClick={() => 
                        setShowHumberger(true)
                    }></AiOutlineMenu>
                </div>
            </div>
        </div>    
        </div>  
        <div className="container">
            <div className="row hero_categories_container">
                <div className="col-lg-3 col-sm-12 col-xs-12 col-md-12 hero_categories">
                    <div className="hero_categories_all" onClick={() => setShowCategories(!isShowCategories)}>
                    <AiOutlineMenu />
                    Danh sách sản phẩm
                    </div>
                    {isShowCategories && (
                    <ul className={isShowCategories ? "" : "hidden"}>
                    {categories.map((category, key) =>  (
                        <li key={key}><Link to={ROUTERS.USER.PRODUCTS}>{category}</Link></li>
                    ))}
                    </ul>
                    )
                    }

                </div>
                <div className="col-lg-9 col-sm-12 col-xs-12 col-md-12 hero_search_container">
                    <div className="hero_search">
                        <div className="hero_search_form">
                        <form>
                            <input type="text" placeholder="Bạn đang tìm gì?"></input>
                            <button type="submit">Tìm kiếm</button>
                        </form>
                        </div>
                        <div className="hero_search_phone">
                            <div className="hero_search_phone_icon">
                                 <AiOutlinePhone />
                            </div>
                            <div className="hero_search_phone_text">
                                 <p>076-305-8366</p>
                                 <span>Hổ trợ 24/7</span>
                            </div>
                        </div>
                    </div>
                    {isHome && (
                    <div className="hero_item">
                         <div className="hero_text">
                             <span>Trái cây tươi</span>
                             <h2>Rau quả <br /> sạch 100%</h2>
                             <p>Miễn phí giao hàng tận nơi</p>
                             <Link to="" className="primary-btn">
                             Mua ngay
                              </Link>
                         </div>
                    </div>   
                    )}
                </div>
            </div>
        </div>    
        </>      
    )
          
};

export default memo(Header);