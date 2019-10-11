import React, { Component } from 'react';

export default class Plan extends Component{
    constructor(props) {
        super(props);
        this.state = {
            stars: this.props.stars,
            imagenes: Array(parseFloat(this.props.stars))                       
        };              
      }           
         
    render(){                                    
        return(
            <div className={this.props.className}>                                                  
                    {Array.from(this.state.imagenes).map((imagen, index) => 
                    <img className="star" src="./img/star-icon.png" alt="" key={index}/>
                    )}
                    <h2>{this.props.nombre}</h2>
                    <br/>
                    <p>{this.props.descripcion}</p>
                    <br/>
                    <p><a className="btn btn-light btn-detalle" href="#" role="button">DETALLE</a></p>                
            </div>
            
        );
    }
}