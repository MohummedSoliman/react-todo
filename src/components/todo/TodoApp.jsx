import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp(){
    return (
        <div className="TodoApp">
            Todo Management Application
            <LoginComponent/>
        </div>
    )
}

function LoginComponent(){

    const [username, setUsername] = useState('Mohamed');

    const [password, setUserPassword] = useState('');

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handleUserPassChange(event){
        setUserPassword(event.target.value)
    }

    return (
      <div className="Login">
        <div className="LoginForm">
            <div>
                <label>User Name</label>
                <input type="text" name="username" value={username}
                    onChange={handleUsernameChange}
                />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={password}
                    onChange={handleUserPassChange}
                />
            </div>
            <div>
                <button type="button" name="login">Login</button>
            </div>
        </div>
      </div>
    )
}