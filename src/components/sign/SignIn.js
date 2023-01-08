import React, { useState,useContext } from 'react'
import './sign.css'
import { globalContext } from '../../App';
import Login from '../data/Login';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const {setLogin} = useContext(globalContext);
    const [user,setUser] = useState({
        username:'',
        password:''
    })
    const navigate = useNavigate()

    const changing=(value)=>{
        return setUser((prev)=>{
            return {...prev,...value}
        })
    }

    const submitForm=()=>{
           if(user.username === Login[0].username && user.password===Login[0].password ){
            setLogin(true)
            navigate('/profile')
            return
           }
           alert('please enter correct credentials')
    }
    return (
        <>
            <div className='signIn_schoolName'>
                <p>Coral Coast High School, Delhi</p>
            </div>
            <div className='signIn_divBelow'>
                <div className='signIn_divAll'>
                    <h1>Sign-In</h1>
                    <div className='signIn_form'>
                        <div>
                            <input type='text' value={user.username} placeholder='username is abc123'
                            onChange={(e)=>changing({username:e.target.value})} required/>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <input type='password' value={user.password} placeholder='password is 12345'
                            onChange={(e)=>changing({password:e.target.value})} required/>
                        </div>
                        <button onClick={()=>submitForm()}>submit</button>
                    </div>
                </div>
                <div className='signIn_anime'>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            </div>
            
        </>
    )
}

export default SignIn