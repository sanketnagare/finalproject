import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Adlogin.css";
const Adlogin = () => {
    const navigate = useNavigate();
    const adminuser = {
        email: "admin",
        password: "admin"
    }

    // const [user, setUser] = useState({ name: "", email: "" });
    const [error, setError] = useState("");

    const [details, setDetails] = useState({ email: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();
        Login(details);

    }

    const Login = details => {
        console.log(details);
        if (details.email === adminuser.email && details.password === adminuser.password) {
            // setUser({
            //     email: details.email,
            // });
            // console.log("logged in");
            navigate("/admindashboard")

        }
        else {
            // console.log("error is here");
            setError("Details do not match");
        }
    }

    // const Logout = () => {
    //     console.log("Logout");
    // }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Admin Login </h2>
                    {(error !== "") ? (<div className="error">{error}</div>) : ""}
                    <div className="form-group">
                        <label htmlFor="email"> Email: </label>
                        <input type="text" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor='password'> Password: </label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <input type="submit" value="LOGIN" />
                    <Link to={"/"}>go back</Link>
                </div>
            </form>

        </div>
    )
}

export default Adlogin;