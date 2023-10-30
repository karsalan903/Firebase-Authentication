import HomePage from "../components/HomePage"
import { useEffect, useState } from "react";
import { auth } from "../firebase";

const Home = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      }else
        setUserName("");
    })
  }, [])

  return (
    <HomePage name={userName}/>
  )
}

export default Home