import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/profiles.css'

function Profile() {
    const { currentUser } = useAuth()

    return (
        <div className="profilContent">
            <h3 className="font-bold py-8">Bienvenue sur votre compte</h3>
            <div className="card">
                {/* Affichage des informations du profil connecter  */}
                <p className="text-white font-bold pb-8">Profile</p>
                <pre>
                    {/* {currentUser && <pre> {JSON.stringify(currentUser, null, 2)}</pre>} */}
                    {currentUser && <pre className="text-green-800 font-bold">{(currentUser.email)}</pre>}
                </pre>
            </div>
        </div>
    )
}

export default Profile;