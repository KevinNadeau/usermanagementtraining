import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);
    // const navigate = useNavigate();

    const handleDelete = (id) => {
        const confirmation = window.confirm("Etes-vous sûr de vouloir supprimer ?"); 
        if (confirmation) {
            axios.delete('http://localhost:3000/users' + id)
            .then(res => {
                alert("Record Deleted")
                window.location.reload();
            }).catch(err => console.log(err));
        }
    }

    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }, []
    )
    return (
        <div className='flex-column d-flex justify-content-center align-items-center bg-light vh-100'>
            <h1>Liste d'Utilisateurs</h1>
            <div className='w-75 rouded bg-white border shadow p-4'>
                <div className='d-flex jutify-content-end'>
                    <Link to="/create" className='btn btn-sucess'></Link>
                </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Phone</th>
                            <th>E-mail</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.username}</td>
                                <td>{d.phone}</td>
                                <td>{d.email}</td>
                                <td>
                                    <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2'>Lire</Link>
                                    <button to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2'>Éditer</button>
                                    <button onClick={ e => handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home