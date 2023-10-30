import { useState } from "react";
import "../components/SignupFormStyles.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase'
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({name: "", email: "", password: ""});
    const [errorMsg, setErrorMsg] = useState("");
    const [disabled, setDisabled] = useState(false);

    const submitHandler = (event) => {
      event.preventDefault()

      if (!values.name || !values.email || !values.password) {
         setErrorMsg("Fill all fields");
         return;
       }
       setErrorMsg("");

      setDisabled(true);
      createUserWithEmailAndPassword(auth, values.email, values.password)
         .then(async(res)=> {
            setDisabled(false)
            const user = res.user
            await updateProfile(user, {displayName: values.name})
            console.log(user)
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
            Signup Form
         </div>
         <form>
            <div className="field">
               <input type="text" required onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value}))}/>
               <label>Name</label>
            </div>
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
               <input type="submit" value="Signup" onClick={submitHandler} disabled={disabled}/>
            </div>
            <div className="signup-link">
               Already have an account? <a href="/login">Login</a>
            </div>
         </form>
    </div>
  )
}

export default SignupForm