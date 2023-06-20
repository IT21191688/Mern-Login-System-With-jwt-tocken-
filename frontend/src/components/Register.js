import React from 'react'
import axios from "axios";
import Styles from '../styles/Register.module.css'
import { useState } from 'react';

export default function Register() {




    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [dob, setDob] = useState('')
    const [password, setPassword] = useState('')




    //should pass event
    function btnClick(e) {



        const validate = true;

        if (validate === true) {

            e.preventDefault();


            const formData = new FormData();

            formData.append('firstname', firstName);
            formData.append('lastname', lastName);
            formData.append('email', email);
            formData.append('age', age);
            formData.append('dob', dob);
            formData.append('password', password);




            axios.post("http://localhost:8050/appoinment/addAppoinment", formData).then(function () {

                alert("Student Add");
                //successModel();


            }).catch(function (err) {

                alert(err);
                //unsuccessModel();

            })

        }


    }






    return (

        <div className='container flex justify-center' >

            <form className='mt-20 border-solid border-inherit border-2 rounded-sm p-5 shadow-xl' method="post" encType="multipart/form-data" >
                <h1 className='text-primary text-2xl font-bold'>Register Form</h1>

                <div className='row'>
                    <div class="form-group col-md-6">
                        <label>First Name</label>
                        <input type="text" class="form-control" placeholder="First Name" onChange={e => setFirstName(e.target.value)} />
                    </div>
                    <div class="form-group col-md-6">
                        <label>Last Name</label>
                        <input type="text" class="form-control" placeholder="Last Name" onChange={e => setLastName(e.target.value)} />
                    </div>
                </div><br></br>
                <div className='row'>
                    <div class="form-group col-md-6">
                        <label >Email</label>
                        <input type="email" class="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div class="form-group col-md-6">
                        <label >Age</label>
                        <input type="number" class="form-control" placeholder="Age" onChange={e => setAge(e.target.value)} />
                    </div>
                </div><br></br>
                <div className='row'>
                    <div class="form-group col-md-6">
                        <label >Date Of Birth</label>
                        <input type="date" class="form-control" onChange={e => setDob(e.target.value)} />
                    </div>
                    <div class="form-group col-md-6">
                        <label >Password</label>
                        <input type="password" class="form-control" placeholder="password" onChange={e => setPassword(e.target.value)} />
                    </div>
                </div><br></br>


                <button type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-48" onClick={btnClick}>Submit</button><br></br><br></br>
                <button type="submit" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-48">Cancel</button>
            </form>




        </div>
    )



}