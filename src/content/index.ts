import { headerType } from "../type/headerType";
import imgComp1 from "../assets/home/Component 27.png"
import imgComp2 from "../assets/home/Component 28.png"
import imgComp3 from "../assets/home/Component 29.png"
export const headerList:headerType[] = [
    {
        id : 1 ,
        title : "Home",
        _id: "",
        active: false
    },
    {
        id : 2 ,
        title : "About",
        _id: "/about",
        active: false
    },
    {
        id : 3 ,
        title : "Category",
        _id: "/category",
        active: false
    },
    {
        id : 4 ,
        title : "Plog",
        _id: "/plog",
        active: false
    },
    {
        id : 5 ,
        title : "Contact Us",
        _id: "/contactUs",
        active: false
    }
]

export const blogsList = [
    {
        title : "Lorem ipsum dolor sit amet consectetur. Urna ac sed ullamcorper donec mi in.",
        desc : "Lorem ipsum dolor sit amet consectetur. Libero est quis pulvinar justo. Orci et sem.",
        img:imgComp1
    },
    {
        title : "Lorem ipsum dolor sit amet consectetur. Urna ac sed ullamcorper donec mi in.",
        desc : "Lorem ipsum dolor sit amet consectetur. Libero est quis pulvinar justo. Orci et sem.",
        img:imgComp2
    },
    {
        title : "Lorem ipsum dolor sit amet consectetur. Urna ac sed ullamcorper donec mi in.",
        desc : "Lorem ipsum dolor sit amet consectetur. Libero est quis pulvinar justo. Orci et sem.",
        img:imgComp3
    }
]