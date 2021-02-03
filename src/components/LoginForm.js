import React,{useState} from "react"
import axios from "axios"

const LoginForm = (props)=>{
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (event)=>{
        event.preventDefault()
        var data = JSON.stringify({"username":username,"password":password});

        var config = {
        method: 'post',
        url: 'http://localhost:3000/authuser',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
        console.log(response.data);
        })
        .catch(function (error) {
        console.log(error);
        });

      }

    return (
        <form>
        <label>
            username:
            <input type="text" name="username" value={username} onChange={(event)=>setUsername(event.target.value)}/>
        </label>
        <label>
            password:
            <input type="text" name="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
        </label>
        <input type="submit" value="Submit" onClick={(e)=>handleSubmit(e)}/>
        </form>
    )
}
export default LoginForm