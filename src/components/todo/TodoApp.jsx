export default function TodoApp(){
    return (
        <div className="TodoApp">
            Todo Management Application
            <LoginComponent/>
        </div>
    )
}

function LoginComponent(){
    return (
      <div className="Login">
        <div className="LoginForm">
            <div>
                <label>User Name</label>
                <input type="text" name="username"/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password"/>
            </div>
            <div>
                <button type="button" name="login">Login</button>
            </div>
        </div>
      </div>
    )
}