import React from 'react';
import { FaMinusSquare } from 'react-icons/fa';
import { FaPlusSquare } from 'react-icons/fa';
import './Produto.css'

const Produto = (props) => {

    return (
    <div id="produto">
        <img className="img-produto" src={props.img} alt="" width="280px" height="320px"/>
        <p id="product-name">{props.name}</p>
            <form id="div-form">
                <p id="p-alt"><button type="button" className="alterar" onClick={props.btnAdd} >
                    <FaPlusSquare/></button></p>
                    <input id={props.productID} className="qtd"/>
                <p id="p-alt"><button type="button" className="alterar productID" onClick={props.btnRemove}>
                    <FaMinusSquare/></button></p>
            </form>
    </div>
    )
}

export default Produto