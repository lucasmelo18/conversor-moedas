import React, { Component } from 'react';
import './Conversor.css';


class Conversor extends  Component{
    constructor(props){
        super(props);

        this.state={
            moedaA_valor: "",
            moedaB_valor: 0,
        }

    }

    converter = ()=>{
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`

        let url= `https://free.currconv.com/api/v7/convert?apiKey=sample-key-do-not-use&q=${de_para}&compact=y`

        fetch(url)
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                let cotacao = data[de_para].val;
                let moedaB_valor = (this.state.moedaA_valor * cotacao).toFixed(2);
                this.setState({
                    moedaB_valor
                })
            })
    }

    pegarValor= (event)=>{
        this.setState({
            moedaA_valor:event.target.value
        })
    }
    render(){
        return(
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={this.pegarValorg}/>
                <input type="button" value="Converter" onClick ={this.converter} />
                <h2>{this.state.moedaB_valor}</h2>
            </div>
        )
    }
}

export default Conversor;