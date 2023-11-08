import { Link, useParams } from "react-router-dom";
import axios from "axios";


function callHelloWorldRestAPI(){
    axios.get("http://localhost:8080/hello-world")
         .then( (reponse) => successfulResponse(reponse))
         .catch( (error) => errorReponse(error));
}

function successfulResponse(response){
    console.log(response);
}

function errorReponse(error){
    console.log(error);
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
            <button className="btn btn-success m-5" onClick={ callHelloWorldRestAPI}>
                Call Hello World API.
            </button>
        </div>
    )
}

export default WelcomeComponent