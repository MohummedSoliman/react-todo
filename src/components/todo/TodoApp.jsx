import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import './TodoApp.css'
import LogoutComponent from './LogoutComponent';

export default function TodoApp(){
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<LoginComponent/>} />
                    <Route path='/login' element={<LoginComponent/>} />
                    <Route path='/welcome/:username' element={<WelcomeComponent/>} />
                    <Route path='/todos' element={ < ListTodosComponent />} />
                    <Route path='/logout' element={ < LogoutComponent /> }/>

                    <Route path='/*' element={< ErrorComponent />} />

                </Routes>
                <FooterComponent/>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent(){

    const [username, setUsername] = useState('Mohamed');

    const [password, setUserPassword] = useState('');

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const navigate = useNavigate();


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
            navigate(`/welcome/${username}`);
        } else {
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }

    return (
      <div className="Login">
         <h1>Time To Login!</h1>
        {showSuccessMessage && <div className="successMessae" >Authenticated Successfully</div>} 
        {showErrorMessage && <div className="errorMessage">Authentication Failed, Please Check your Credintial.</div>}
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

function WelcomeComponent(){

    const { username } = useParams();
    console.log(username)
    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
               Manage Your Todos : <Link to="/todos">Go Here!</Link>
            </div>
        </div>
    )
}

function ErrorComponent(){
    return (
        <div className="ErrorComponent">
            <h1>We Are Working really hard</h1>
            <div>
               Applogies for the 404, Reach out to our team.
            </div>
        </div>
    )
}

function ListTodosComponent(){

    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), 
                                today.getDay());

    const todos = [
        {id: 1, description: 'Learn AWS', done: false, targetDate: targetDate},
        {id: 2, description: 'Learn Spring Boot', done: false, targetDate: targetDate},
        {id: 3, description: 'Learn Spring Security', done: false, targetDate: targetDate}
    ]

    return (
        <div class="container">
           <h1>Things You Want To Do!</h1>
           <div>
               <table className="table">
                   <thead>
                       <tr>
                           <th>ID</th>
                           <th>Description</th>
                           <th>IS Done</th>
                           <th>Target Date</th>
                       </tr>
                   </thead>
                   <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={ todo.id }>
                                    <td>{ todo.id }</td>
                                    <td>{ todo.description }</td>
                                    <td>{ todo.done.toString() }</td>
                                    <td>{ todo.targetDate.toDateString() }</td>
                                </tr>
                            )
                        )
                    }
                   </tbody>
               </table>
           </div>
        </div>
    )
}

function HeaderComponent() {
    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.in28minutes.com">in28minutes</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                        <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </div>
            </div>
        </header>

    )
}

function FooterComponent()  {
    return (
        <footer className="footer">
            <div className="container">
              Footer .
            </div>
        </footer>
    )
}
