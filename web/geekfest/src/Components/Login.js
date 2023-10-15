import React, { useState } from "react";
import { useNavigate} from "react-router-dom";

// import ListUserLogin from "../../data/listUserLogin";
function Login() {
const initialValues ={
    login:"",
    password:""
};
const navigate = useNavigate();
const[formValues, setFormValues] = useState(initialValues);
const[wrongLogin, setWrongLogin] = useState("");
const[formErrors, setFormErrors] = useState({});
const [authenticated, setAuthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false));
const users = [{login: "UserTest", password: "passwordTest"}]



function handleChange(event){
    setFormValues(
        {
            ...formValues,
            [event.target.name]: event.target.value
        }
    )

}
let flag = true;
function DataValidation(inputValues) {
    const errors={};
    if(!inputValues.login){
        flag = false;
        errors.login = "Veuillez entrer votre login";
    }
    if(!inputValues.password){
        flag = false;
        errors.password = "Veuillez enter votre password";
    }

    return errors;
}

function handleSubmit(event){

    event.preventDefault()
    setFormErrors(DataValidation(formValues))
    const account = users.find((user) => user.login === formValues.login);
    if (account && account.password === formValues.password && flag === true) {
        setAuthenticated(true);
        localStorage.setItem("authenticated", true);
        console.log("Sucess")
        navigate("/dashboard ", {state: { user:formValues.login, password:formValues.password}})
    }else{
        setWrongLogin("Le login ou le mot de passe n'est pas bon!");
    }
}
    return(
    <form onSubmit={handleSubmit} className="Container">
        <div>
            <span>{formErrors.login}</span>
            Login <input onChange={handleChange} type="username" name={"login"} value={formValues.login}/>
            <span>{formErrors.password}</span>
            Password <input onChange={handleChange} type="password" name={"password"} value={formValues.password}/>
            <button onClick={handleSubmit}> Connect </button>
        </div>
        <>{wrongLogin}</>

    </form>
    );
}
export default Login;