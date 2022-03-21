import React, {useState} from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import '../detalle/detalle.css'

const Detail = ({location, history}) => {

  

   let {state} = location
   const onRevert = () => {
     history.push("/")
   }


        // const url = `https://staging-api.transvip.cl/${ encodeURI(category) }&limit=10`
     
    return (
        <div>
            <div className="deta">
                
                <img className="img2" src="logo_detail.png" alt="reloj.png" width="250" height="40"></img>
                
                <button className="btnvolver2" onClick={onRevert} >
                  
                <img src="flecha.png" width="10px" style={{marginRight:"10px"}}/>
                 
                volver
                </button>
           
                
               
                <div className="contenedor">

                    <div className="principal">
                        {/* <div className="reservadetail"> */}
                        <p >Reserva</p>
                        <p >Pasajero</p>
                        <p >Hora de retiro</p>
                        <p >Fecha</p>
                        <p >Desde</p>
                        <p >Hacia</p>
                        {/* </div> */}
                    </div>
                    <div className="sidebar">
                        <p >:{state.reserva}</p>
                        <p >:{state.pasajero}</p>
                        <p >:{state.horaRetiro}</p>
                        <p >:{state.fecha}</p>
                        <p >:{state.desde}</p>
                        <p >:{state.hacia}</p>
                    </div>
                </div>
                <button className="btnprint">  
                    <img src="print.png" width="20px" style={{marginRight:"10px", marginTop:"5px"}}/>
                    Imprimir
                </button>
            </div>
            
        </div>

    )
}

export default Detail