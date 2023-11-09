import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useAuth } from "../security/AuthContext";
import { retrieveTodoAPI } from "./api/RestTodoApiService"
import { Formik, Form, Field, ErrorMessage } from "formik";

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

    function onSubmit(values){
        console.log(values)
    }

    function validate(values){
        let errors = {
            description : "Enter a valid Description",
            targetDate : "Enter a valid Target Date"
        };
        if(values.description.length < 5) {
            errors.description = "Enter atleast 5 Characters"
        }

        if(values.targetDate == null){
            errors.targetDate = "Enter Target Date"
        }
        return errors;
    }

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                <Formik initialValues={ { description, targetDate} }
                        enableReinitialize = { true }
                        onSubmit = { onSubmit }
                        validate = { validate }
                        validateOnChange = { false }
                        validateOnBlur = { false }>
                {
                (props) => {
                    return <Form>
                           <ErrorMessage 
                               name="description"
                               component="div"
                               className="alert alert-warning"
                           />
                           <ErrorMessage 
                               name="targetDate"
                               component="div"
                               className="alert alert-warning"
                           />
                           <fieldset className="form-group">
                               <label>Description</label>
                               <Field type="text" name="description" className="form-control"/>
                           </fieldset>
                           <fieldset className="form-group">
                               <label>Target Date</label>
                               <Field type="date" name="targetDate" className="form-control"/>
                           </fieldset>
                           <div>
                               <button className="btn btn-success m-5" type="submit">Save</button>
                           </div>
                        </Form>
                    }
                }
                </Formik>
            </div>
        </div>
    )
}