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

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    function SuccessMessageComponent(){
        if(showSuccessMessage) 
            return <div className="successMessae" >Authenticated Successfully</div>
        return null
    }

    function ErrorMessageComponent(){
        if(showErrorMessage)
            return <div className="errorMessage">Authentication Failed, Please Check your Credintial.</div>

        return null
    }

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handleUserPassChange(event){
        setUserPassword(event.target.value)
    }

    function handleSubmit(){
        if(username === "Mohamed" && password ==="123") {
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
        } else {
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }

    return (
      <div className="Login">
        <SuccessMessageComponent />
        <ErrorMessageComponent/>
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
                <button type="button" name="login" 
                    onClick={handleSubmit}>Login</button>
            </div>
        </div>
      </div>
    )
}