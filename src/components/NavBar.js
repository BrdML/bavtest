import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="bg-green-500 height-20">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact
                        activeClassName="text-blue-300 bg-green-600"
                        className="inflex-flex items-center py-6 px-3 rounded mr-4 text-orange-400 hover:text-red-400 text-4xl font-bold"
                    >
                        Accueil
                    </NavLink>
                    <NavLink to="/inscription"
                        className="inline-flex items-center font-bold py-3 px-3 my-6 rounded text-orange-300 hover:text-red-400"
                        activeClassName="text-blue-300 bg-green-600"
                    >
                        S'inscrire
                    </NavLink>
                    <NavLink to="/connexion"
                        className="inline-flex items-center font-bold py-3 px-3 my-6 rounded text-orange-300 hover:text-red-400"
                        activeClassName="text-blue-300 bg-green-600"
                    >
                        Se connecter
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}