import React, { useState } from 'react';
import { FaMinusSquare } from 'react-icons/fa';
import { FaPlusSquare } from 'react-icons/fa';
import './Produto.css'

const Produto = (props) => {
    return (
    <div id="produto">
        <img className="img-produto" src={props.img} alt="" width="280px" height="320px"/>
        <p id="product-name">{props.name}</p>
        <div id="div-button">
            <p id="p-alt">Adicionar<button type="button" className="alterar" onClick={props.btnAdd} ><FaPlusSquare/></button></p>
            <p id="p-alt">Retirar<button type="button" className="alterar" onClick={props.btnRemove}><FaMinusSquare/></button></p>
        </div>
    </div>
    )
}

export default Produto