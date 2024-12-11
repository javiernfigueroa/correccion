import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div style={{display:'grid', gridTemplateColumns:'auto auto'}}>
            <img src="https://th.bing.com/th/id/OIP.1Yi9oDyGbLaAwkymgOK-BgHaJN?rs=1&pid=ImgDetMain" alt="Caja vacia" />
            <div>
                <img src='https://th.bing.com/th/id/OIP.Zx8Y5nuD1Lqvn_nrR0WoEAHaE7?rs=1&pid=ImgDetMain' alt="error 404" />
                <h3>La pagina no esta disponible</h3>
                <hr/>
                <p>Para volver presione 
                    <Link to="/" style={{textDecoration:'underline', color:'blueviolet'}}> aqui.</Link>
                </p>
            </div>
        </div>
    )
}

export default NotFound