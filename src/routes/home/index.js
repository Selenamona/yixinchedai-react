import React,{Component} from "react";
import { Carousel, Grid  } from 'antd-mobile';
import Footer from "../../components/common/common.js"
import "../../components/common/common.css";
import "./index.css";

// 头部
const Header = () => {
    return <div className="header">    
                <a className="navImg"> </a>
                <div className="search">
                    <img src={require("../../images/search-icon.png")} alt=""/>
                    请输入品牌或车型
                </div>
                <span className="adress">
                    北京
                    <img src={require("../../images/down.png")} alt=""/>
                </span>
            </div>
}

// 汽车品牌
const brandsData = [
    {img:require("../../images/m_26_100.png"),name:"本田"},
    {img:require("../../images/m_8_100.png"),name:"大众"},
    {img:require("../../images/m_34_100.png"),name:"吉利"},
    {img:require("../../images/m_136_100.png"),name:"长安"},
    {img:require("../../images/m_9_100.png"),name:"奥迪"},
    {img:require("../../images/m_157_100.png"),name:"宝骏"},
    {img:require("../../images/m_196_100.png"),name:"哈弗"},
    {img:require("../../images/m_7_100.png"),name:"丰田"},
    {img:require("../../images/m_77_100.png"),name:"众泰"},
    {img:require("../../images/more@2X.2cd6f6.png"),name:"更多"}
]
const carBrands = brandsData.map((_val, i) => ({
  icon: _val.img,
  text: _val.name,
}));
// 价钱
const price1 = ["3万以下","3-5万","5-8万","8-10万"];
const price2 = ["0首付","3万以下","3-5万","5-8万"];
const price3 = ["1千以下","1-3千","3-5千","5-8千"];
const price4 = ["紧凑型车","SUV","中型车","MPV"];
// 汽车保险、旗舰店、易鑫体验店、领取那中心
const shopCenter = [
    {
        img:require("../../images/carinsurance.png"),
        title:"汽车保险"
    },
    {
        img:require("../../images/FlagshipShop.png"),
        title:"旗舰店"
    },
    {
        img:require("../../images/experienceCenter.png"),
        title:"易鑫体验店"
    },
    {
        img:require("../../images/Togoo.png"),
        title:"领券中心"
    }
]
// 限时抢购
const saleData = [
    {
        time:"4天8时32分",
        img:require("../../images/sale1.jpg"),
        title:"传祺GS4",
        feature:"利息折扣",
        price:"2283元x36期"
    },
    {
        time:"5天9时12分",
        title:"森雅R7",
        img:require("../../images/sale2.jpg"),
        feature:"快速审批",
        price:"1869元x36期"
    },
    {
        time:"3天9时12分",
        title:"宝马3系",
        img:require("../../images/sale3.jpg"),
        feature:"鑫工贷",
        price:"6545元x36期"
    },
    {
        time:"2天9时12分",
        title:"Levante",
        img:require("../../images/sale4.jpg"),
        feature:"弹性贷",
        price:"8388元x36期"
    }
]

class homePage extends Component {
    state = {
        data: [
            {
                img:require('../../images/2.jpg'),
                url:"http://m.daikuan.com/activity/xsd/?source=1315"
            },
            {
                img:require('../../images/3.jpg'),
                url:"https://www.10100000.com/m/daikuan/iloan/2.0ap/index.html?utm_source=wxhanxzhij--"
            },
            {
                img:require('../../images/1.jpg'),
                url:"http://shop.m.daikuan.com/msld"
            }
        ],
        imgHeight: 176,
        active:0
    }
    render(){
        return <div>
            <Header/>
            <div className="content">
                {/* 轮播图 */}
                <Carousel
                    autoplay={true}
                    infinite
                    selectedIndex={1}
                    >
                    {this.state.data.map((ii,index) => (
                        <a
                            key={index}
                            href={ii.url}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={ii.img}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                </Carousel>
                {/* 帮您贷款、二手车、开走吧 */}
                <div className="part2">
                    <a href="">
                        <p>帮您贷款</p>
                        <span>20秒锁定方案</span>
                    </a>
                    <a href="http://ershouche.m.daikuan.com/beijing/?source=703">
                        <p>二手车</p>
                        <span>花小钱开好车</span>
                    </a>
                    <a href="http://m.daikuan.com/Lease/beijing/?source=906">
                        <p>开走吧</p>
                        <span>1万元起开新车</span>
                    </a>
                </div>
                {/* 汽车品牌 */}
                <Grid data={carBrands} columnNum={5}  hasLine={false} /> 
                {/* 价钱 */}
                <div className="priceSearch">
                    <div>
                        <span>车价</span>
                        {price1.map((ele,index)=>{
                            return <a key={index} onClick="">{ele}</a>
                        })}
                    </div>
                    <div>
                        <span>首付</span>
                        {price2.map((ele,index)=>{
                        return <a key={index} onClick="">{ele}</a>
                        })}
                    </div>
                    <div>
                        <span>月供</span>
                        {price3.map((ele,index)=>{
                        return <a key={index} onClick="">{ele}</a>
                        })}
                    </div>
                    <div>
                        <span>级别</span>
                        {price4.map((ele,index)=>{
                            return <a key={index} onClick="">{ele}</a>
                        })}
                    </div>
                    <button>更多筛选></button>
                </div>
                {/* 汽车保险、旗舰店、易鑫体验店、领取那中心 */}
                <div className="shopCenter">
                    {
                        shopCenter.map((ele,index)=>{
                            return <div key={index} >
                                        <img src={ele.img} alt=""/>
                                        <p>{ele.title}</p>
                                    </div>
                        })
                    }
                    
                </div>
                {/* 易鑫热点 */}
                <div className="hot">
                    <div className="hotDiv benefit">
                        <img src={require("../../images/hot.png")} alt=""/>
                        <Carousel className="hot-carousel"
                            vertical
                            dots={false}
                            dragging={false}
                            swiping={false}
                            autoplay
                            infinite
                            >
                            <div className="v-item"><span>></span>最快10秒钟在线审批，当日放款</div>
                            <div className="v-item"><span>></span>低利息低月供，仅凭身份证即可贷款</div>
                            <div className="v-item"><span>></span>全国300+城市，100+金融服务</div>
                        </Carousel>
                    </div>
                    <div className="hotDiv laterly">
                        <p>最近申请 </p>
                        <Carousel className="apply-carousel"
                            vertical
                            dots={false}
                            dragging={false}
                            swiping={false}
                            autoplay
                            infinite
                            >
                            <div className="v-item">艾先生  易鑫自营  额度2.77万</div>
                            <div className="v-item">许先生  中国工商银行  额度3.21万</div>
                            <div className="v-item">邓先生  广发银行  额度8.08万</div>
                        </Carousel>
                    </div>
                </div>
                {/* 广告 */}
                <div className="ads">
                    <img src={require("../../images/ad1.jpg")} alt=""/>
                    <img src={require("../../images/ad2.jpg")} alt=""/>
                </div>
                {/* 限时抢购 */}
                <div className="flashSale">
                    <p className="title bb">
                        <img src={require("../../images/flashsale.png")} alt=""/>
                        限时抢购
                    </p>
                    <ul>
                        {
                            saleData.map((ele,index)=>{
                                return <li key={index} >
                                            <p className="time">{ele.time}</p>
                                            <img src={ele.img} alt=""/>
                                            <p className="name">{ele.title}</p>
                                            <p className="feature">{ele.feature}</p>
                                            <p className="price">{ele.price}</p>
                                        </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <Footer active={this.state.active} changeTab={this.changeTab.bind(this)}/>          
        </div>
    }
    changeTab(index){
        this.setState({
            active:index
        })
    }
    componentDidMount() {
       
    }
} 

export default homePage;