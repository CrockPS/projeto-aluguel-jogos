import React, { Component } from 'react';
import './Inicio.css';

export default class Inicio extends Component{
    render(){
        return (
        <div id="div-inicio">  
            <div>
                <div id="div-text">
                    <h1 id="title">Bem vindo a Ioiô jogos!</h1>
                    <p className="perg">Tá difícil achar formas de se divertir com amigos?
                        Quer se divertir com os amigos e ainda por cima a um baixo custo? 
                    </p>
                    <br/>
                    <p className="resp">
                        Pois a Ioiô Jogos está aqui para te ajudar nisso, escolha dentre
                        diversas opções montando seu próprio combo com um valor com base 
                        na quantidade de jogos escolhidos e de dias a alugar, quando acabar 
                        de escolher vá para a "Sacola" (no canto superior direito) para saber 
                        o valor que você irá pagar.
                    </p>
                    <br/>
                    <p className="perg">
                        Por que "Ioiô Jogos"?
                    </p>
                    <br/>
                    <p className="resp">
                        Assim como com um ioiô a diversão aqui vai e vem, 
                        O que está esperando? <br/><br/>
                        <span id="slogan">Do netinho ao vovô, diversão é com a Ioiô!</span>
                    </p>
                </div>
            </div>
        </div>
        )
    }
} 