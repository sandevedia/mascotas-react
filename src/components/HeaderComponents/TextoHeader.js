import React, {Component } from 'react';
 

export default class TextoHeader extends Component{
    render(){
        return(
            <div>
                <h3 className="subtitulo">
                    <b>CAMBIAMOS PARA VOS</b></h3>
                    <h2 className="header-content animated fadeIn">Prevet se renovó.</h2>
                    <h4 className="header-content">Nos unimos a mascota24 para brindar nuevos y mejores servicios.</h4>   
                    <br/>                    
                    <p>
                        <a className="btn" href="" id="btnNServicios" role="button">NUEVOS SERVICIOS</a>                                        
                    </p>  

            </div>
               
        );
    }
}