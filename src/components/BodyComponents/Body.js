import React, { Component } from 'react';
import Plan from './Plan';


export default class Body extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 planes">
                            <h2>Planes prevet</h2>
                            <h3>Seleccioná tu plan y descubrí nuevas prestaciones.</h3>
                    </div>                
                </div>
                <div className="row planes" >                    
                       <Plan 
                            nombre="Classic" 
                            stars="1"  
                            descripcion="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat"                          
                            className="col-lg-4" />                   
                         <Plan 
                            nombre="Gold" 
                            stars="2"   
                            descripcion="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat"            
                            className="col-lg-4" />                                      
                        <Plan 
                            nombre="Premium" 
                            stars="3"   
                            descripcion="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat"            
                            className="col-lg-4" />
                </div>
                <div className="row planes" >
                        <div className="col-lg-5 align-self-end">
                            <h2>Veterinario a domicilio</h2>
                            <h4>Llamá y programá una visita veterinaria en tu domicilio*</h4>
                            <h2>4204880</h2>
                            <img className="icono" src="./img/mano.png" alt=""/>
                            <img className="icono" src="./img/gato.png" alt=""/>
                            <img className="icono" src="./img/perro.png" alt=""/>
                            <br/>
                            <br/>
                            <br/>
                            <p className="comentario">*
                                    El pedido del servicio se realiza con el recibo de cuota en mano o
                                    app, se le solicitarán los datos del asociado que figuran en el
                                    mismo
                                </p>
                        </div>
                        <div className="col-lg-7">
                            <img src="img/svad.png" alt="" className="img-dec"/>
                        </div>
                </div>
                <div className="row planes" >
                        <div className="col-lg-7">
                                <img src="img/local-mascota.png" alt="" className="img-dec"/>
                            </div>
                        <div className="col-lg-5 align-self-end">
                            <h2>Entre Ríos 1675 Pb.</h2>
                            <h4>Llamá y programá una visita veterinaria en tu domicilio*</h4>
                            <h2>4204880</h2>
                            <img className="icono-redes" src="./img/whatsapp.png" alt=""/>
                            Hace tu consulta
                            <br/>
                            <img className="icono-redes" src="./img/facebook.png" alt=""/>
                            facebook
                            <br/>
                            <img className="icono-redes" src="./img/instagram.png" alt=""/>
                            instagram
                            <br/>  
                        </div>
                </div>
                <div className="row planes" >
                        <div className="col-lg-5 align-self-center">
                            <h3 className="subtitulo"><b>APP MASCOTERA</b></h3>
                                <h2>Descargá la app</h2>
                                <h4>Pedí servicios, usala de credencial, mantenete informado.</h4>   
                                <br/>                    
                                <p><a className="btn btn-light btn-detalle" href="#" role="button">ANDROID</a>
                                    <a className="btn btn-light btn-detalle" href="#" role="button">IOS</a>
                                </p>                      
                            </div>
                        <div className="col-lg-7">
                                <img src="img/descarga-la-app.png" alt="" className="img-dec"/>
                            </div>
                            <br/>                       
                        
                </div>
        
    </div>

        );
    }
}