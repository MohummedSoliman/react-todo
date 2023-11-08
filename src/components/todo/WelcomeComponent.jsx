import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { retrieveHelloWorld, retrieveHelloWorldPath } from "./api/HelloWorldApiService";

function WelcomeComponent(){

    const { username } = useParams();

    const [ message, setMessage ] = useState(null);

    function callHelloWorldRestAPI(){
            retrieveHelloWorld()
             .then( (reponse) => successfulResponse(reponse))
             .catch( (error) => errorReponse(error));

            retrieveHelloWorldPath(username)
             .then( (reponse) => successfulResponse(reponse))
             .catch( (error) => errorReponse(error));
    }
    
    function successfulResponse(response){
        setMessage(response.data.message);
    }
    
    function errorReponse(error){
        console.log(error);
    }

    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
               Manage Your Todos : <Link to="/todos">Go Here!</Link>
            </div>
            <button className="btn btn-success m-5" onClick={ callHelloWorldRestAPI}>
                Call Hello World API.
            </button>
            <div className="text-info">
                { message }
            </div>
        </div>
    )
}

export default WelcomeComponent