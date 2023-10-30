import "../components/LoginFormStyles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const LoginForm = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({email: "", password: ""});
    const [errorMsg, setErrorMsg] = useState("");
    const [disabled, setDisabled] = useState(false);

    const submitHandler = (event) => {
      event.preventDefault()

      if (!values.email || !values.password) {
         setErrorMsg("Fill all fields");
         return;
       }
       setErrorMsg("");

      setDisabled(true);
      signInWithEmailAndPassword(auth, values.email, values.password)
         .then(async(res)=> {
            setDisabled(false)
            navigate("/");
         })
         .catch((err) => {
            setDisabled(false)
            setErrorMsg(err.message)
         })
}
  return (
    <div className="wrapper">
         <div className="title">
            Login Form
         </div>
         <form>
            <div className="field">
               <input type="text" required onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value}))}/>
               <label>Email Address</label>
            </div>
            <div className="field">
               <input type="password" required onChange={(event) => setValues((prev) => ({ ...prev, password: event.target.value}))}/>
               <label>Password</label>
            </div>
            <div className="content">
               <p style={{color: 'red'}}>{errorMsg}</p>
            </div>
            <div className="field">
               <input type="submit" value="Login" onClick={submitHandler} disabled={disabled}/>
            </div>
            <div className="signup-link">
               Not a member? <a href="/signup">Signup now</a>
            </div>
         </form>
    </div>
  )
}

export default LoginForm