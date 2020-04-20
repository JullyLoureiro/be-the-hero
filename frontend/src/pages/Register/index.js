import React, {useState} from 'react'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'

export default function Register(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    const history = useHistory()

    async function handleRegister(event){
        event.preventDefault()
        const data = {name, email, whatsapp, city, uf}

        try{
            const response = await api.post(`/ongs`, data)
            alert(`Seu ID de acesso: ${response.data.id}`)
            history.push('/')
        }catch(error) {
            alert(`Erro no cadastro, tente novamente!`)
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude a pessoas a encontrarem os casos da sua ONG</p>

                    <Link className="back-link" to="/"> <FiArrowLeft color="#e02041" size={16} />Voltar para o logon</Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG" value={name} onChange={e=>setName(e.target.value)} />
                    <input placeholder="E-mail" type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                    <input placeholder="Whatsapp" value={whatsapp} onChange={e=>setWhatsapp(e.target.value)}/>
                    
                    <div className="input-group">
                        <input placeholder="Cidade" value={city} onChange={e=>setCity(e.target.value)}/>
                        <input placeholder="UF" value={uf} onChange={e=>setUf(e.target.value)} style={{width: 80}}/>
                    </div>

                    <button type="submit" className="button">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}