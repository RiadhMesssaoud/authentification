import React, {useState ,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {registerUser} from '../actions/authActions';


const Register = ({history}) => {
    const [info,setInfo] = useState({
        firstname:"",
        lasttname:"",
        phone:"",
        email:"",
        password:"",

    });
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    useEffect (() =>{
        if(auth.isAuth){
            history.push("/feed");
        }

    }, [auth.isAuth]);

    const handleChange = e =>{
        setInfo({...info,[e.target.name]:e.target.value})
    };
    const registerNow = e =>{
        e.preventDefault();
        dispatch(registerUser(info));

    };

    return (
    <form onSubmit={registerNow}>
        <div>
        <label>Firstname</label>
        <input type="text" name="firstname" onChange = {handleChange}/>  
        </div>
        
        <div>
        <label>Lastname</label>
        <input type="text" name="lastname" onChange = {handleChange}/>  
        </div>
        
        <div>
        <label>Phone</label>
        <input type="text" name="phone" onChange = {handleChange}/>  
        </div>
        
        <div>
        <label>Email</label>
        <input type="text" name="email" onChange = {handleChange}/>  
        </div>

        <div>
        <label>Password</label>
        <input type="text" name="password" onChange = {handleChange}/>  
        </div>
        
      <button type="submit">Register</button>
    </form>
      
            
       
    )
}

export default Register
