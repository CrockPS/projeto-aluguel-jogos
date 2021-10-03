import React, { useState } from 'react';
import Header from '../Header';
import Inicio from '../Inicio';
import Content from '../Content';
//import Footer from './Components/Footer';
import uno from "../images/UNO.jpg";
import unoFlip from "../images/unoFlip.png";
import baralho from "../images/baralho.png";
import war from "../images/War.png";
import BatalhaNaval from "../images/BatalhaNaval.jpg";
import detetive from "../images/detetive.png";
import banco from "../images/banco.png";
import jogoVida from "../images/jogoVida.png";
import euSou from "../images/euSou.png";
import dama from "../images/dama.png";
import damaLudo from "../images/damaLudo.png";
import damaXadrez from "../images/damaXadrez.png";

const Home = (props) => {

    let [pedidos, setPedidos] = useState(0);
    //let [qtd, setPedidos] = useState(0);

    //const qtd = document.querySelector({productID});
    //let valor = qtd.current.value;

    //console.log(qtd);

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
        <Header pedidos={pedidos} id="menu2"/>
        <Inicio />
        <Content  btnAdd={handleAdd} btnRemove={handleRemove}
        //productID1="001" productID2="002" productID3="003"
        categoria="op1" section="Jogos de cartas" img1={uno} name1='Uno Tradicional'
        img2={unoFlip} name2='Uno Flip' img3={baralho} name3='Baralho de cartas' />

        <Content btnAdd={handleAdd} btnRemove={handleRemove}
        //productID1="004" productID2="005" productID3="006"
        categoria="op2" section="Jogos de estratégia" img1={war} name1='Jogo War'
        img2={BatalhaNaval} name2='Batalha Naval' img3={detetive} name3='Detetive' />

        <Content btnAdd={handleAdd} btnRemove={handleRemove}
        //productID1="007" productID2="008" productID3="009"
        categoria="op3" section="Diversão com a família" img1={banco} name1='Banco Imobiliário'
        img2={jogoVida} name2='Super Jogo da Vida' img3={euSou} name3='Jogo Eu sou?' />

        <Content btnAdd={handleAdd} btnRemove={handleRemove}
        //productID1="010" productID2="011" productID3="012"
        categoria="op4" section="Jogos de tabuleiro" img1={dama} name1='Jogo de dama'
        img2={damaLudo} name2='Jogo 2 em 1 Dama e Ludo' img3={damaXadrez} name3='Jogo 2 em 1 Dama e Xadrez' />
    </>
    )
}

export default Home;