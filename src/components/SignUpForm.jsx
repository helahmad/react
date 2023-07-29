import { useState } from 'react' ;

function SignUpForm() {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    async function handleSubmit(event) {
        event.preventDefault();
        
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
        setUsername("");
        setPassword("");
    }

    return (
        <>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label> 
                    Username: {" "}
                    <input 
                        value={username} 
                        onChange={(e) => {setUsername(e.target.value)}}
                    />
                </label>
                <label>
                    Password: {" "}
                    <input 
                        type= "password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </label>
                <button>Submit</button>
            </form>
        </>
            
    );
}

export default SignUpForm ;