import {memo} from "react";
import BreadCrumb from "../theme/breadCrumb";
import "./style.scss";
import { Link } from "react-router-dom";
import { categories } from "../theme/header";
import { ROUTERS } from "../../../../utils/router";

import banh1Img from "../homePage/imgslide/banhbonglan.png";
import sua1Img from "../homePage/imgslide/suadac.jpg";
import bia1Img from "../homePage/imgslide/heniken.jpg";
import mi1Img from "../homePage/imgslide//mikoreno.jpg";
import duahau1Img from "../homePage/imgslide/dauhau.jpg";
import xucxich1Img from "../homePage/imgslide/xucxich.jpg";
import dauphong1Img from "../homePage/imgslide/dauphongphomai.jpg";
import feature1Img from "../homePage/imgslide/featured-1.jpg";

const productsPage = () => {

    const sorts = [
        "Giá thấp đến giá cao",
        "Giáo cao đến giá thấp",
        "Mới đến cũ",
        "Cũ đến mới",
        "Bán chạy nhất",
        "Đang giảm giá",
    ];
    const products = [
        {
            img:feature1Img,
            name:"Thịt bò nạt",
            price : 20000,
          },
          {
            img:sua1Img,
            name:"Sữa đặc",
            price : 20000,
          },
          {
            img:banh1Img,
            name:"Bánh bông lan",
            price : 20000,
          },
          {
            img:bia1Img,
            name:"Bia Heniken",
            price : 20000,
          },
          {
            img:mi1Img,
            name:"Mì Koreno",
            price : 20000,
          },
          {
            img:xucxich1Img,
            name:"Xúc xích",
            price : 20000,
          },
          {
            img:dauphong1Img,
            name:"Đậu phộng phô mai",
            price : 20000,
          },
          {
            img:duahau1Img,
            name:"Dưa hấu",
            price : 20000,
          },
    ];
    return (
        <>
        <BreadCrumb name="Danh sách sản phẩm" />
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="sidebar">
                        <div className="sidebar_item">
                            <h2>Tìm kiếm</h2>
                            <input type="text"></input>
                        </div>
                        <div className="sidebar_item">
                            <h2>Mức giá</h2>
                            <div className="price_ranger-wrap">
                                <div>
                                    <p>Từ:</p>
                                    <input type="number" min={0}></input>
                                </div>
                                <div>
                                    <p>Đến:</p>
                                    <input type="number" min={0}></input>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar_item">
                            <h2>Sắp xếp</h2>
                            <div className="tags">
                                {sorts.map((item, key)=> (
                                <div className={`tag ${key === 0 ? "active" : ""}`} 
                                key={key}>{item}</div>
                            ))}
                            </div>
                        </div>
                        <div className="sidebar_item">
                            <h2>Thể loại khác</h2>
                            <ul>
                                {categories.map((name, key) => (
                                    <li key={key}>
                                        <Link to={ROUTERS.USER.PRODUCTS}>
                                            {name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="row">
                    {products.map((item, j) => (
                        <Link key={j} className="product-item">
                        <img src={item.img} alt={item.name}></img>
                        <p>{item.name}</p>
                        <p className="product-price">{item.price}</p>
                        </Link>
                    ))

                    }

                    </div>
                </div>
            </div>
        </div>
        </>   
    );
    
};

export default memo(productsPage);