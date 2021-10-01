import React from  'react';
import Produto from './Produto';
import './Content.css'

const Content = (props) => {
    return (
    <div id="div-content">
        <h1 className="section-name"id={props.categoria}>{props.section}</h1>
        <div id="vitrine">
            <Produto img={props.img1} name={props.name1} value={props.value}
                btnAdd={props.btnAdd} btnRemove={props.btnRemove} productID={props.productID1}/>
            <Produto img={props.img2} name={props.name2}
                btnAdd={props.btnAdd} btnRemove={props.btnRemove} productID={props.productID2}/>
            <Produto img={props.img3} name={props.name3}
                btnAdd={props.btnAdd} btnRemove={props.btnRemove} productID={props.productID3}/>
            <a href="/" id="vermais"><p>Ver <br/>todas as <br/>opções</p></a>
        </div>
    </div>
        )
}  

export default Content;