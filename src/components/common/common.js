// import React,{Component} from "react";
import React from "react";

// const Header = ()=>{
//     return <div className="header">

//     </div>
// }



//footer
const tab = [
    {
        name:"新车贷款",
        img1:require("../../images/f1.png"),
        img2:require("../../images/f11.png")
    },
    {
        name:"二手车贷款",
        img1:require("../../images/f2.png"),
        img2:require("../../images/f22.png")
    },
    {
        name:"帮您贷款",
        img1:require("../../images/fc.png"),
        img2:require("../../images/fc.png")
    },
    {
        name:"开走吧",
        img1:require("../../images/f3.png"),
        img2:require("../../images/f33.png")
    },
    {
        name:"我的",
        img1:require("../../images/f44.png"),
        img2:require("../../images/f44.png")
    }
]

const Footer = (props) => {
    const { active,changeTab } = props;
    return <div className="footer">
        {
            tab.map((ele,index)=>{
                return <div onClick={()=>changeTab(index)} key={index}>
                            <p className="imgWrap">
                                <img src={active === index?ele.img1:ele.img2} alt=""/>
                            </p>
                            <p className={active === index?"red":""}>{ele.name}</p>
                        </div>
            })
        }
    </div>
}

export default Footer;
