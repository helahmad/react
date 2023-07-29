//import React from "react";
import { useState } from 'react' ;
import SignUpForm from "./SignUpForm";
//import App from '../App';




function Authenticate({token}) {
    
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    async function handleClick() {
        try {
            const response = await fetch(
                    "https://fsa-jwt-practice.herokuapp.com/signup",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        }   
                    }
            );
            const result = await response.json();
            setSuccessMessage(result.message);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <h2>Authenticate!</h2>
            <SignUpForm />
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token!</button>

        </div>
    );    
}

export default Authenticate ;
