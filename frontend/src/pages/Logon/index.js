import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import './styles.css';
import api from '../../services/api';

import logoImg from '../../assets/evidence-logo.png';


export default function Logon() {

    const [id, setId] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id, senha });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        } catch (err) {
            alert('Falha no login, tente novamente');
        }

    }



    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Evidence" />

                <form onSubmit={handleLogin}>
                    <input
                        placeholder="Seu login"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <input
                        placeholder="Sua senha"
                        type="password"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>



        </div>
    );

}