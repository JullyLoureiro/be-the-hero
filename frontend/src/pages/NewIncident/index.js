import React, {useState} from 'react'
import './styles.css'
import {Link, useHistory} from 'react-router-dom'
import { FiArrowLeft} from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function NewIncident(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const ongId = localStorage.getItem('ongId')

    const history = useHistory()

    async function handleNewIncident(e){
        e.preventDefault()
        const data = {title, description, value}
        
        try {
            await api.post(`/incidents`, data, {
                headers: {
                    Authorization: ongId
                }
            })

            history.push('/profile')
        } catch (error) {
            alert('Falha ao cadastrar caso, tente novamente!')
        }
    }

    return(
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile"> <FiArrowLeft color="#e02041" size={16} />Voltar para home</Link>
                </section>
                <form>
                    <input placeholder="Título do caso" value={title} onChange={e=>setTitle(e.target.value)}/>
                    <textarea placeholder="Descrição" value={description} onChange={e=>setDescription(e.target.value)}/>
                    <input placeholder="Valor em reais" value={value} onChange={e=>setValue(e.target.value)}/>

                    <button onClick={handleNewIncident} type="submit" className="button">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}