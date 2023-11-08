import { useEffect, useState } from "react";
import { retrieveTodosForUser } from "./api/RestTodoApiService";

function ListTodosComponent(){

    // const today = new Date();
    // const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), 
    //                             today.getDay());

    const [todos, setTodos] = useState([]);

    // const todos = [
    //     {id: 1, description: 'Learn AWS', done: false, targetDate: targetDate},
    //     {id: 2, description: 'Learn Spring Boot', done: false, targetDate: targetDate},
    //     {id: 3, description: 'Learn Spring Security', done: false, targetDate: targetDate}
    // ]

    useEffect(
        () => refreshTodos(), []
    );
    

    function refreshTodos(){
        retrieveTodosForUser('Mohamed')
           .then( response => {
               setTodos(response.data)
           })
           .catch();
    }

    return (
        <div className="container">
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
                                    <td>{ todo.targetDate }</td>
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

export default ListTodosComponent