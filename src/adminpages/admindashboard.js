import React from 'react';
import { useNavigate } from "react-router-dom";

const Addcandidate = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2> Welcome, Admin</h2>
            <button onClick={() => navigate("/adlogin")} > Logout </button>
        </div>
    )
}

export default Addcandidate;