import { useState } from 'react' ;
//import App from '../App';


function SignUpForm() {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    const handleUsernameChange = (event) =>{
        setUsername(event.target.value) ;
    };

    const handlePasswordChange = (event) =>{
        setPassword(event.target.value) ;
    };

    async function handleSubmit(event) {
        event.preventDefault();

        if (!username || !password) {
            console.log("Please enter both username and password");
        }
        
        try {
            const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/signup", 
            {   
                method: "POST",
                body: {
                    username,
                    password
                }
            });
            const result = await response.json();
            const token = result.token;
            
            return token ;   
                
                
        } catch (error) {
            setError(error.message);
        }
        // setToken(result.token);
    }

    return (
        <>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label> 
                    Username: {" "}
                    <input 
                        value={ username } 
                        onChange={ handleUsernameChange }
                    />
                </label>
                <label>
                    Password: {" "}
                    <input 
                        type= "password"
                        value={ password } 
                        onChange={ handlePasswordChange } 
                    />
                </label>
                <button>Submit</button>
            </form>
        </>
            
    );
}

export default SignUpForm ;