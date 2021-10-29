import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="bg-green-600 height-20">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact
                        activeClassName="text-white"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-orange-100 hover:text-orange-800 text-4xl font-bold">
                        Accueil
                    </NavLink>
                    <NavLink to="/connexion"
                        className="inline-flex items-center font-bold py-3 px-3 my-6 rounded text-orange-100 hover:text-orange-800"
                        activeClassName="text-orange-300 bg-orange-700"
                    >
                        Connexion
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}