import { Link } from "react-router-dom";
import "../components/HomePageStyles.css";

const HomePage = (props) => {
  return (
    <div>
        <div className="container">
            <div className="text">
                Welcome to the Firebase authentication platform!
            </div>
            <div className="field">
                <div>
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/signup"}>Signup</Link>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="comment">
                <h2>{props.name ? `Hello, ${props.name}!` : "Please login!"}</h2>
            </div>
        </div>
    </div>
  )
}

export default HomePage