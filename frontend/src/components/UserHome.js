import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



export default function UserHome() {


    const navigate = useNavigate();

    useEffect(() => {

        // Get token and role from URL query parameters
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        const role = params.get('role');

        // Store token and role in local storage or state
        // Here's an example using local storage
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);


    }, []);





    return (

        <div style={{ height: "90vh" }}>

            <h1>User Home</h1>
            <br></br>


        </div>
    )

}