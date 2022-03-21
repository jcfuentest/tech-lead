import React from 'react'
import '../notFoundJobs/notfound.css'

const NotFoundJobs = ({history}) => {

  const onReturn = () => {
        history.push("/")
  }
  return (
    <div>
          
      <div className="deta1">
    
            <p className="pdetalle">Sin Resultados Encontrados</p>
            <button className="btnvolver1" onClick={onReturn}>volver</button>
            {/* <img className="reloj1" src="reloj.png" alt="reloj.png" width="25" height="25"></img>
            <img className="reloj2" src="aspas.png" alt="reloj.png" width="10" height="10"></img> */}
            <div className="contenedor">
    
             Lo sentimos no encontramos reservas asociadas a este correo.
             intentelo nuevamente o acerquese a nuestro counter.
            
  
            </div>
        
    
        </div>
    
          </div>
        
  )
}

export default NotFoundJobs