import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import api from '../../services/api';


export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();

        const data ={
            title,
            description,
            value,

        };

        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
        } catch(err){
            alert('Erro ao cadastrar caso, tente novamente.')
        }
    }

    return (
        <div className="new-incident">
        <div className="content">
            <section>
                <img src="" alt="Be The Hero"/>

                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#e02041"/>
                    Voltar para home
                </Link>
            </section>

            <form onSubmit={handleNewIncident}>
                <input 
                    value={title}
                    onChange={e=> setTitle(e.target.value)}
                    placeholder="Título do caso"
                />
                <textarea 
                    value={description}
                    onChange={e=> setDescription(e.target.value)}
                    placeholder="Descrição"/>
                <input 
                    value={value}
                    onChange={e=> setValue(e.target.value)}
                    placeholder="Valor em reais"
                />

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );

}