import React from 'react';
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs';
import { BsBag } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import './Header.css';

const Header = (props) => {

    /*function handleClick(){
        let login = document.getElementById("login-link");
        let display = login.style.display;
        
        
    }*/

    const menuItens = document.querySelectorAll('#menu2 a[href^="#"]');

    menuItens.forEach(item => {
        item.addEventListener('click', scrollOnClick)
    });

    function getScroll(element){
        const id = element.getAttribute('href');
        return document.querySelector(id).offsetTop;
    }

    function scrollOnClick(event){
        event.preventDefault();
        const to = getScroll(event.target) - 120;
        scrollToPosition(to);
    }

    function scrollToPosition(to){
        window.scroll({
            top: to, behavior: "smooth",
        })
    }

        return (
        <>
            <nav id="menu1">
                <a href="/" id="logo" className="op"> Ioiô Jogos </a>
                <input type="text" placeholder="O que você está buscando?"/><button type="button"><BsSearch/></button>
                <Link to="/Login" id="login-link" className="op icon"> <AiOutlineUser/> <p className="icon-text">Faça seu login <br/> ou cadastre-se</p></Link>
                <a href="/" id="p" className="op"> <BsBag/> {props.pedidos} </a>
            </nav>
            <nav id={props.id}>
                <a href="#op1" className="op">Jogos de cartas</a>
                <a href="#op2" className="op">Jogos de estratégia</a>
                <a href="#op3" className="op">Diversão em família</a>
                <a href="#op4" className="op">Jogos de tabuleiro</a>
                <Link to="/" className="op icon"><p className="icon-text">Ver todas as opções</p> <AiOutlineArrowRight/></Link>
            </nav>
            <div id="space"></div>      
        </>
        )
}

export default Header;