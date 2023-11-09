import { useEffect, useState } from "react";
import { retrieveTodosForUserAPI, deleteTodoByIdAPI } from "./api/RestTodoApiService";
import { useAuth } from "../security/AuthContext";
import { useNavigate } from "react-router-dom";

function ListTodosComponent(){

    // const today = new Date();
    // const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), 
    //                             today.getDay());

    const [todos, setTodos] = useState([]);
    const [message, setMessage ] = useState(null);

    const authContext = useAuth();

    const username = authContext.username;

    const navigate = useNavigate();

    // const todos = [
    //     {id: 1, description: 'Learn AWS', done: false, targetDate: targetDate},
    //     {id: 2, description: 'Learn Spring Boot', done: false, targetDate: targetDate},
    //     {id: 3, description: 'Learn Spring Security', done: false, targetDate: targetDate}
    // ]

    useEffect(
        () => refreshTodos(), []
    );
    

    function refreshTodos(){
        retrieveTodosForUserAPI(username)
           .then( response => {
               setTodos(response.data)
           })
           .catch();
    }

    function deleteTodo(id){
        deleteTodoByIdAPI(username, id)
           .then(
               () => {
                   setMessage(`Delete of Todo with ${id} success`)
                   refreshTodos();
               }
           )
           .catch(error => console.log(error));
    }

    function updateTodo(id){
        navigate(`/todo/${id}`);
    }

    function addNewTdod(){
        navigate(`/todo/-1`)
    }

    return (
        <div className="container">
           <h1>Things You Want To Do!</h1>
           { message && <div className="alert alert-warning">{ message }</div> }
           <div>
               <table className="table">
                   <thead>
                       <tr>
                           <th>Description</th>
                           <th>IS Done</th>
                           <th>Target Date</th>
                           <th>Delete</th>
                           <th>Update</th>
                       </tr>
                   </thead>
                   <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={ todo.id }>
                                    <td>{ todo.description }</td>
                                    <td>{ todo.done.toString() }</td>
                                    <td>{ todo.targetDate }</td>
                                    <td><button className="btn btn-danger" onClick={ () => deleteTodo( todo.id) }>Delete</button></td>
                                    <td><button className="btn btn-warning" onClick={ () => updateTodo( todo.id) }>Update</button></td>
                                </tr>
                            )
                        )
                    }
                   </tbody>
               </table>
               <div>
                   <button className="btn btn-success m-5" onClick={ addNewTdod }>Add New Todo</button>
               </div>
           </div>
        </div>
    )
}

export default ListTodosComponent