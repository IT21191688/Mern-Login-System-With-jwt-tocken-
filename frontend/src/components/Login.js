import React from "react";
import { Link } from "react-router-dom";
import { loginDetailsValidation } from '../healper/validate'
import profileImg from "../assets/user.png"
import style from '../styles/Login.module.css'
import { Toaster } from 'react-hot-toast'
import { useFormik } from "formik";



export default function Login() {


    const formik = useFormik({

        initialValues: {

            username: '',
            password: ''

        },
        validate: loginDetailsValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {

            console.log(values)
        }

    }

    )


    return (

        <div className="container mx-auto">

            <Toaster position="top-center" reverseOrder={false}></Toaster>

            <div className="flex justify-center items-center h-screen">
                <div className={style.glass}>


                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold">Login</h4>

                        <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                            Explore more by connecting with us
                        </span>

                    </div>

                    <form className="py-1" onSubmit={formik.handleSubmit}>
                        <div className="profile flex justify-center py-4">
                            <img src={profileImg} alt="avatar" style={{ width: "100px" }} />
                        </div>
                        <div className="textbox flex-col items-center py-4">

                            <input {...formik.getFieldProps('username')} className="form-control" type="text" placeholder="UserName" /><br />

                            <input {...formik.getFieldProps('password')} className="form-control" type="password" placeholder="Password" />


                            <br></br>
                            <div className="flex justify-center">

                                <button class="bg-green-600 hover:bg-orange-500 duration-500 text-white font-bold py-2 px-4 rounded w-[250px]" type="submit">LOGIN</button>


                            </div>

                        </div>

                        <div className="text-center py-4">

                            <span className="text">Not A member <Link className="text-red-500" to="/signup" >Register</Link></span>

                        </div>

                    </form>

                </div>

            </div>

        </div>


    )


}
