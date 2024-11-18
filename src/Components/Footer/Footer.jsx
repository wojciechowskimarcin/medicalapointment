// eslint-disable-next-line no-unused-vars
import React from 'react';
import s from "./Footer.module.scss"
import home from "./img/Home.svg";
import calendar from "./img/Calendar.svg";
import chat from "./img/Chat.svg";
import profile from "./img/Profile.svg";




const linkData =[
    {title:"home", image:home, href:"#"},
    {title:"calendar", image:calendar, href:"#kalendarz"},
    {title:"chat", image:chat, href:"#chat"},
    {title:"profile", image:profile, href:"#profile"}
]

function FooterElement({title, image, href}){
    return (
        <li className='footerElement'>
            <a title={title} href={href}><img src={image} alt={title}/></a></li>
    )
}


function Footer(props) {
    return (
        <footer>
            <ul>
            {
            linkData.map((element, index) =>(
            <FooterElement key={index} tit={element.title} image={element.image} href={element.href} />
            ))}
            </ul>
        </footer>
    );
}

export default Footer;
