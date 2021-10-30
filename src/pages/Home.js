import React from 'react'
import image from '../medias/logo_couleur.png'

function Accueil() {
    return (
        <div className="homecontent flex items-center">
            <img src={image} alt="homeImage" className="animation flex mx-auto" />
        </div>
    )
}

export default Accueil
