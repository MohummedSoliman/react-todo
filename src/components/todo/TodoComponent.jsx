import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useAuth } from "../security/AuthContext";
import { retrieveTodoAPI } from "./api/RestTodoApiService"

export default function TodoComponent(){

    const { id } = useParams()
    const authContext = useAuth();
    const username = authContext.username;

    const [ description, setDescription ] = useState();

    const [ targetDate, setTargetDate ] = useState();

    useEffect(
        () => retrieveTodo(),
        [id]
    )

    function retrieveTodo(){
        retrieveTodoAPI(username, id)
            .then( response => {
                setDescription(response.data.description)
                setTargetDate(response.data.targetDate)
            }
        )
            .catch( error => console.log(error));
    }

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <form>
                Description: { description }
            </form>
        </div>
    )
}