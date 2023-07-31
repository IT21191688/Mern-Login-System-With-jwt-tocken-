import React from "react";
import { useEffect } from "react";


export default function AdminHome() {

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

    //window.location.reload();

    return (

        <div style={{ height: "90vh" }}>

            <h1>Admin Home</h1>

            <a href="/adminRegister"><button className="btn btn-primary btn-lg">Admin Register</button></a>

        </div>
    )

}


