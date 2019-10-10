import React, { Component } from 'react';
import Redes from './components/HeaderComponents/Redes';


export default class Header extends Component {
    render(){
        return  (                
            <header>
                <div class="container-fluid portada">
                     <div class="row">
                        <div class="col align-self-center"/>
                        <img class="logo animated fadeIn" src="./img/logo.png" alt="" />
                        <div/>
                     </div>
                     <div class="row">
                        <div class="container">
                            <div class="row planes">
                                <div class="col-lg-5 col-6 ">
                                    <h3 class="subtitulo"><b>CAMBIAMOS PARA VOS</b></h3>
                                        <h2 class="header-content animated fadeIn">Prevet se renovó.</h2>
                                        <h4 class="header-content">Nos unimos a mascota24 para brindar nuevos y mejores servicios.</h4>   
                                        <br/>                    
                                        <p><a class="btn" href="" id="btnNServicios" role="button">NUEVOS SERVICIOS</a>                                        
                                        </p>                      
                                </div>
                                 <div class="col-lg-7 col-6 " >
                                    <Redes/>
                                </div>   
                            </div>
                        </div>                                
                    </div>            
                </div>
            </header>
        );
                     
                       
    }
}


