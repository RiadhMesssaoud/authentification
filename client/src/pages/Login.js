import React,{useState} from 'react'

const Login = () => {
    const [info,setInfo] = useState({
        email:"",
        password:"",

    });
    const handleChange = e =>{
        setInfo({...info,[e.target.name]:e.target.value})
    }

    return (
        <div>
        <div>
        <label>Email</label>
        <input type="text" name="email" onChange = {handleChange}/>  
        </div>

        <div>
        <label>Password</label>
        <input type="text" name="password" onChange = {handleChange}/>  
        </div>
        <button type="submit">Register</button>

        </div>
    )
}

export default Login
