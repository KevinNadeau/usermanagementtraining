import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect } from 'react';

function Update() {
    //const [data, setData] = useState([]);
    const {id} = useParams();
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: ''
    })
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:3000/users' + id)
        .then(res => {
            setValues(res.data);
        })
        .catch(err => console.log(err));
    }, []
    )

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:3000/users/'+id, values)
        .then(res => {console.log(res); navigate('/')})
        .catch(err => console.log(err))
    }

    return (
        <div className='d-flex w-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Mettre à jour un Utilisateur</h1>
        <form onSubmit={handleUpdate}>
            <div className='mb-2'>
                <label htmlFor='name'>Name:</label>
                <input type="text" name='name' className='form-control' placeholder='Entrer le nom'  value={values.name} onChange={e => setValues({...values, name: e.target.value})}/>
            </div>
            <div className='mb-2'>
                <label htmlFor='email'>E-mail:</label>
                <input type="text" name='email' className='form-control' placeholder='Entrer le mail' value={values.email} onChange={e => setValues({...values, email: e.target.value})}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='phone'>Phone:</label>
                <input type="text" name='phone' className='form-control' placeholder='Entrer le numero' value={values.phone} onChange={e => setValues({...values, phone: e.target.value})}/>
            </div>
            <button className='btn btn-success'>Mettre à jour</button>
            <Link to="/" className='btn btn-sm btn-info ms-3'>Retour</Link>
        </form>
    </div>
    </div>
    )
}

export default Update;