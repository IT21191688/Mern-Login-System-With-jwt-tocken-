import React from 'react'
import axios from "axios";
import Styles from '../styles/Register.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Reset() {



    const [email, setEmail] = useState('')

    const [otp, setOtp] = useState('')




    //should pass event
    function btnClick(e) {



        const validate = true;

        if (validate === true) {

            e.preventDefault();


            const formData = new FormData();

            formData.append('email', email);

            formData.append('password', otp);




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

            <form className='mt-20 border-solid border-inherit border-2 rounded-sm p-5 shadow-xl w-80' method="post" encType="multipart/form-data" >
                <h1 className='text-primary text-2xl font-bold'>Reset Password</h1><br></br>


                <div className='row'>
                    <div class="form-group col-md-12">
                        <label >Email</label>
                        <input type="email" class="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                    </div>


                </div><br></br>

                <button type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-48" onClick={btnClick}>Sent OTP</button><br></br><br></br>
                <div className='row'>

                    <div class="form-group col-md-12">
                        <label >Enter OTP</label>
                        <input type="number" class="form-control" placeholder="OTP" onChange={e => setOtp(e.target.value)} />
                    </div>
                </div><br></br>



                <button type="submit" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-48">Submit</button><br></br>

                <span>If you not able to OTP plese re enter your email and press sent button</span>
            </form>




        </div>
    )



}