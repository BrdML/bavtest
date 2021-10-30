import { React, useState } from 'react';
import '../styles/form.css';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Connexion() {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useAuth()

    const faildMessage = (message) => {
        let formMess = document.querySelector('.form-message');

        formMess.innerHTML = message;
        formMess.style.opacity = '1';
        setTimeout(() => {
            formMess.style.opacity = '0';
        }, 5000);
        formMess.style.bacground = 'rgb(253,87,87)';
        formMess.style.animation = 'dongle 1s';
        setTimeout(() => {
            formMess.style.animation = 'none'
        }, 1000);
    }

    const successMessage = (message) => {
        let formMess = document.querySelector('.form-message');

        formMess.innerHTML = message;
        formMess.style.opacity = '1';
        setTimeout(() => {
            formMess.style.opacity = '0';
        }, 5000);
        formMess.style.color = '#33ffa0';
        formMess.style.animation = 'dongle 1s';
    }

    return (
        <form
            className="form-content flex align-items-center"
            onSubmit={async e => {
                e.preventDefault()
                //login logic
                if (!email || !password) {
                    faildMessage("Erreur");
                }
                successMessage("Vous ête connecter")
                login(email, password)
                    .then((response) => {
                        console.log(response)
                        history.push('/profile')
                    })
                    .catch((error) => {
                        console.log(error.message)
                        faildMessage(error.message);
                    })
            }}
        >
            <div className="form2 mx-auto flex align-items-center">
                <h3 className="form-title text-white py-8 font-bold">Connectez vous</h3>
                <div className="form-group">
                    <label className="text-white font-bold" htmlFor="email">Email: </label>
                    <input
                        value={email}
                        type="email"
                        name="email"
                        id="email"
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="text-white font-bold" htmlFor="password">Mot de passe: </label>
                    <input
                        value={password}
                        type="password"
                        name="password"
                        id="password"
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Connexion
                </Button>
                <div id="form-message" className="form-message mx-auto text-red-800"></div>
            </div>
        </form>
    )
}

export default Connexion
