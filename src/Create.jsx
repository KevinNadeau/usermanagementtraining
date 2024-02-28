import { useState, useNavigate } from "react";
import React from 'react'
import axios from 'axios';

function Create() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: ''
    })
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/users', values).then(res => {
          alert("Data Posted Successfully!"); 
          navigate('/')
        }).catch(err => console.log(err));
      }

    return (
        <div className='d-flex w-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>Créer un Utilisateur</h1>
            <form onSubmit = {handleSubmit}>
                <div className='mb-2'>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" name='name' className='form-control' placeholder='Entrer le nom' onChange={e => setValues({...values, name: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='email'>E-mail:</label>
                    <input type="text" name='email' className='form-control' placeholder='Entrer le maail' onChange={e => setValues({...values, email: e.target.value})}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='phone'>Phone:</label>
                    <input type="text" name='phone' className='form-control' placeholder='Entrer le numéro' onChange={e => setValues({...values, phone: e.target.value})}/>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Create