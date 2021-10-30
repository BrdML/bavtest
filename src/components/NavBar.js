import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

export default function NavBar() {

    const { currentUser, logout } = useAuth()
    const history = useHistory()
    console.log(currentUser)

    return (
        <header className="bg-green-500 height-20">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/" exact
                        activeClassName="text-blue-300 bg-green-600"
                        className="inflex-flex items-center py-6 px-3 rounded mr-4 text-orange-400 hover:text-red-400 text-4xl font-bold"
                    >
                        Accueil
                    </NavLink>
                    {/*utilisateur non connecter currentUser renvoi null et est convertie en false par l'opérateur ! et on n'affiche le liens*/}
                    {!currentUser && <NavLink
                        to="/inscription"
                        name="Inscription"
                        className="inline-flex items-center font-bold py-3 px-3 my-6 rounded text-orange-300 hover:text-red-400"
                        activeClassName="text-blue-300 bg-green-600"
                    >
                        S'inscrire
                    </NavLink>}
                    {!currentUser && <NavLink
                        to="/connexion"
                        name="Connexion"
                        className="inline-flex items-center font-bold py-3 px-3 my-6 rounded text-orange-300 hover:text-red-400"
                        activeClassName="text-blue-300 bg-green-600"
                    >
                        Se connecter
                    </NavLink>}
                    {currentUser && <NavLink
                        to="/logout"
                        name="Logout"
                        className="inline-flex items-center font-bold py-3 px-3 my-6 rounded text-red-700 hover:text-red-400"
                        activeClassName="text-blue-300"
                        onClick={async e => {
                            e.preventDefault()

                            // Recupération de la fonction logout via useAuth dans AuthContext
                            // alert('logout user')
                            logout()
                            history.push('/')
                        }}

                    >
                        Se déconnecter
                    </NavLink>}
                </nav>
            </div>
        </header>
    );
}