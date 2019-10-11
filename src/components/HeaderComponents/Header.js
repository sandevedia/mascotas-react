import React, { Component } from 'react';
import Redes from './Redes';
import TextoHeader from './TextoHeader';

export default class Header extends Component {
    render(){
        return  (                
             <div>
                <div className="container-fluid portada">
                    <div className="row">
                        <div className="col align-self-center">
                            <img className="logo animated fadeIn" src="./img/logo.png" alt="" />
                        </div>
                    </div>
                     <div className="row">
                        <div className="container">
                            <div className="row planes">
                                <div className="col-lg-5 col-6 ">
                                    <TextoHeader/>                 
                                </div>
                                 <div className="col-lg-7 col-6 " >
                                    <Redes/>
                                </div>   
                            </div>
                        </div>                                
                    </div>            
                </div>
            </div>
            
        );                   
                       
    }
}


