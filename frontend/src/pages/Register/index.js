import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import logoImg from '../../assets/evidence-logo.png';

import './styles.css';

export default function Register() {

    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            whatsapp,
            senha,
        };


        try{
            const response = await api.post('ongs', data);

            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        } catch(err) {
            alert('Erro no cadastro, tente novamente');

        }
    }


    return (
        <div className="register-container">

            <div className="content">

                <section>


                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e marque seu horário com a sua esteticista favorita.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <img src={logoImg} alt="Evidence" />
                    <input
                        placeholder="Nome completo"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <input
                        placeholder="Senha"
                        type="password"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}