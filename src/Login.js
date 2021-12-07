import React, { useState } from 'react'

const  Login = () =>  {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [allEntry, setAllEntry] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newEntry = {email:email,password:password};

        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry);
    }
    return (
        <div className = "login">
            <form action="" onSubmit= {handleSubmit}>
                <label htmlFor="email" >Email</label>
                <input type="email" 
                    name="email" 
                    id="emailId" 
                    value={email} 
                    onChange = {(e) => 
                        setEmail(e.target.value)
                    }/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="passwordId" value= {password} onChange = {(e) => setPassword(e.target.value)}/>
                <button >Login</button>
            </form>
            {email}
            <br />
            {password}
            <br />
            
        </div>
    )
}

export default Login
