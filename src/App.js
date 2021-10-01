import React, { useState } from 'react';
import Header from './Components/Header';
import Inicio from './Components/Inicio';
import Content from './Components/Content';
//import Footer from './Components/Footer';
import uno from "./Components/images/UNO.jpg";
import unoFlip from "./Components/images/unoFlip.png";
import baralho from "./Components/images/baralho.png";
import war from "./Components/images/War.png";
import BatalhaNaval from "./Components/images/BatalhaNaval.jpg";
import detetive from "./Components/images/detetive.png";
import banco from "./Components/images/banco.png";
import jogoVida from "./Components/images/jogoVida.png";
import euSou from "./Components/images/euSou.png";
import dama from "./Components/images/dama.png";
import damaLudo from "./Components/images/damaLudo.png";
import damaXadrez from "./Components/images/damaXadrez.png";
import './App.css';

export default function App () {

    let [pedidos, setPedidos] = useState(0);
    //let [qtd, setPedidos] = useState(0);

    //const qtd = document.querySelector(".qtd");
    //let valor = qtd.current.value;

    //console.log(valor);

    function handleAdd(){
        setPedidos(pedidos= pedidos + 1);
    }
    function handleRemove(){
        if (pedidos > 0){
            setPedidos(pedidos= pedidos - 1);
        }
    }

    /*function handleChange(){
        document.querySelector({productID}).value=value + 1;

    }*/

    return (
    <>
        <Header pedidos={pedidos}/>
        <Inicio />
        <Content  btnAdd={handleAdd} btnRemove={handleRemove} value="10"
        //productID1="#001" productID2="#002" productID3="#003"
        categoria="op1" section="Jogos de cartas" img1={uno} name1='Uno Tradicional'
        img2={unoFlip} name2='Uno Flip' img3={baralho} name3='Baralho de cartas' />

        <Content btnAdd={handleAdd} btnRemove={handleRemove}
        //productID1="#004" productID2="#005" productID3="#006"
        categoria="op2" section="Jogos de estratégia" img1={war} name1='Jogo War'
        img2={BatalhaNaval} name2='Batalha Naval' img3={detetive} name3='Detetive' />

        <Content btnAdd={handleAdd} btnRemove={handleRemove}
        //productID1="#007" productID2="#008" productID3="#009"
        categoria="op3" section="Diversão com a família" img1={banco} name1='Banco Imobiliário'
        img2={jogoVida} name2='Super Jogo da Vida' img3={euSou} name3='Jogo Eu sou?' />

        <Content btnAdd={handleAdd} btnRemove={handleRemove}
        //productID1="#010" productID2="#011" productID3="#012"
        categoria="op4" section="Jogos de tabuleiro" img1={dama} name1='Jogo de dama'
        img2={damaLudo} name2='Jogo 2 em 1 Dama e Ludo' img3={damaXadrez} name3='Jogo 2 em 1 Dama e Xadrez' />
    </>
    )
}