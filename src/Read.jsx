import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Read() {
    const [data, setData] = useState([]);
    const {id} = useParams();//me donne l'id via l'url avec router dom
    useEffect(()=>{
        axios.get('http://localhost:3000/users' + id)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, []
    )
    return (
        <div className='d-flex w-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h3>Detail des Utilisateurs</h3>
                <div className='mb-2'>
                    <strong>Nom: {data.name}</strong>
                </div>
            </div>
            <div className='mb-2'>
                    <strong>Email: {data.email}</strong>
            </div>
            <div className='mb-3'>
                    <strong>Phone: {data.phone}</strong>
            </div>
            <Link to={`/read/${id}`} className='btn btn-success'>Editer</Link>
            <Link to="/" className='btn btn-sm btn-info ms-3'>Retour</Link>
        </div>
    )
}

export default Read