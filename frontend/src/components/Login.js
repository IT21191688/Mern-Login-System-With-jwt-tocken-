import React from 'react'
import axios from "axios";
import Styles from '../styles/Register.module.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Login() {


    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            // Send login request to the backend API
            const response = await axios.post('http://localhost:8080/auth/login', { email, password });
            const token = response.data.token;


            const role = response.data.role

            // Store the token in local storage
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);

            alert("Login success" + role)

            window.location.reload(true);


        } catch (error) {

            alert("Login Uuccess")
            console.log(error);
        }
    };

    useEffect(() => {
        if (localStorage.getItem('role') === 'admin') {
            navigate('/adminHome');

        } else if (localStorage.getItem('role') === 'user') {
            navigate('/userHome');
        }
        else {
            navigate('/login')
        }
    }, []);


    return (

        <div className='container flex justify-center' >

            <form className='mt-20 border-solid border-inherit border-2 rounded-sm p-5 shadow-xl w-80' method="post" encType="multipart/form-data" >
                <h1 className='text-primary text-2xl font-bold'>Login Form</h1><br></br>


                <div className='row'>
                    <div class="form-group col-md-12">
                        <label >Email</label>
                        <input type="email" class="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                    </div>

                </div><br></br>
                <div className='row'>

                    <div class="form-group col-md-12">
                        <label >Password</label>
                        <input type="password" class="form-control" placeholder="password" onChange={e => setPassword(e.target.value)} />
                    </div>
                </div><br></br>


                <button type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-48" onClick={handleSubmit}>Login</button><br></br><br></br>
                <Link to={'/register'}><button type="submit" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-48">Register</button></Link><br></br>

                <span>Fogot Password: <Link to={'/fogotPassword'} className='cursor-pointer'>Reset</Link></span>
            </form>


        </div>
    )

}