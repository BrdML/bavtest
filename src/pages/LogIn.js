import React from 'react'
import '../styles/form.css'
import Button from '@material-ui/core/Button';

function connexion() {
    return (
        <form action="" className="form-content flex align-items-center">
            <div className="form mx-auto flex align-items-center">
                <h3 className="form-title text-white py-8 font-bold">Connectez vous</h3>
                <div className="form-group">
                    <label className="text-white font-bold" htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form-group">
                    <label className="text-white" htmlFor="password">Mot de passe: </label>
                    <input type="password" name="password" id="password" />
                </div>
                <Button variant="contained" color="secondary">Connexion</Button>
            </div>
        </form>
    )
}

export default connexion
