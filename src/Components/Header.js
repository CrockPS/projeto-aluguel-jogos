import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { BsBag } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import './Header.css';

export default class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {
          pedidos: 0
        };
      }

    render(){
        return (
        <>
            <nav id="menu1">
                <a href="/" id="logo" className="op"> Ioiô Jogos </a>
                <input type="text" placeholder="O que você está buscando?"/><button type="button"><BsSearch/></button>
                <a href="/" className="op icon"> <AiOutlineUser/> <p className="icon-text">Faça seu login <br/> ou cadastre-se</p></a>
                <a href="/" id="p" className="op"> <BsBag/> {this.state.pedidos} </a>
            </nav>
            <nav id="menu2">
                <a href="#op1" className="op">Jogos de cartas</a>
                <a href="#op2" className="op">Jogos de estratégia</a>
                <a href="#op3" className="op">Diversão em família</a>
                <a href="#op4" className="op">Jogos de tabuleiro</a>
                <a href="/" className="op icon"><p className="icon-text">Ver todas as opções</p> <AiOutlineArrowRight/></a>
            </nav>
            <div id="space"></div>
            
        </>
        )
    }
}