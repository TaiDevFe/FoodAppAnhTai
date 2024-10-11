import {memo} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss"
import cat1Img from "./imgslide/cat-1.jpg";
import cat2Img from "./imgslide/cat-2.jpg";
import cat3Img from "./imgslide/cat-3.jpg";
import cat4Img from "./imgslide/cat-4.png";
import cat5Img from "./imgslide/cat-5.png";
import feature1Img from "./imgslide/featured-1.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";


const HomePage = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const sliderItems = [
        {
            bgImg:cat1Img,
            name: "Cam tươi"
        },
        {
          bgImg:cat2Img,
          name: "Hoa quả khô"
        },
        {
        bgImg:cat3Img,
        name: "Rau củ tươi"
        },
        {
        bgImg:cat4Img,
        name: "Sữa hộp"
        },
        {
        bgImg:cat5Img,
        name: "Thịt bò"
    },
      ]
      const featProducts = {
        all:{
          title:"Toàn bộ",
          products:[
            {
              img:feature1Img,
              name:"Thịt bò nạt",
              price : 20000,
            },
            {
              img:feature1Img,
              name:"Chuối",
              price : 20000,
            },
          ],
        },
        freshMeat:{
          title:"Thịt tươi",
          products:[
            {
              img:"",
              name:"Thịt bò tươi",
              price : 20000,
            },
          ],
        },
        
      };
      const renderFeaturedProducts = (data) => {
        const tabList = [];
        const tabPanels = [];

        Object.keys(data).forEach((key, index) => {
          tabList.push(<Tab  key={index}>{data[key].title}</Tab>);

          const tabPanel = [];
          data[key].products.forEach((item, j) => {
            tabPanel.push(<div key={j}>{item.name}</div>)
          });
          tabPanels.push(tabPanel);
        });
        return (
      <Tabs>
        <TabList>{tabList}</TabList>
        {tabPanels.map((item, key) =>(
        <TabPanel key={key}>
          <div className="row">{item}</div>
        </TabPanel>
        ))}
      </Tabs>
        );
      };
    return (
      <>
        <div className="container container_categories_slider">
            <Carousel responsive={responsive} className="categories_slider">
            {sliderItems.map((item, key) => (
             <div 
             key={key} 
             className="categories_slider_item" 
             style={{backgroundImage:`url(${item.bgImg})`}}
             >
            <p>{item.name}</p>
            </div>
            ))}
            </Carousel>
        </div>
        <div className="container">
            <div className="featured">
              <div className="section-title">
                <h2>Sản phẩm nổi bật</h2>             
              </div>
              {renderFeaturedProducts(featProducts)}
            </div>
        </div>
        </>
    );
};

export default memo(HomePage);