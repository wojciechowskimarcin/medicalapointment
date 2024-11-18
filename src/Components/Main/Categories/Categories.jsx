import React, {Fragment} from 'react';
import "./Categories.modules.scss";
import health from "../img/heart rate.svg";
import medicaments from "../img/Pil.svg";
import dentist from "../img/Dentist.svg";
import pregnant from "../img/Pregnant.svg";
import * as styles from "eslint-plugin-react/lib/rules/jsx-props-no-spread-multi.js";
const categoriesData =[
    {title:"zdrowie", image:health, href:"#zdrowie"},
    {title:"leki", image:medicaments, href:"#leki"},
    {title:"dentysta", image:dentist, href:"#leki"},
    {title:"ciaza", image:pregnant, href:"#ciaza"}
]

//console.log(s.categoryElement)


function CategoryElement({tit, image, hre}) {
    const style = {backgroundImage: `url("${image}")`};

    return(
        <li className='categoryElement'><a href={hre} title={tit} style={style}></a></li>
    )
}




function Categories(props) {
    return (
        <div className="categories">
            <h2>Categories</h2>
            <ul className="categoryGroup">
            {categoriesData.map(element => (
                <CategoryElement tit={element.title} hre={element.href} image={element.image} key={element.title}/>
            ))}
            </ul>
        </div>
    );
}

export default Categories;