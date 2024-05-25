import { useContext, useState } from "react";
import { mycontx } from "./Context";
import { useNavigate } from "react-router-dom";
import './css/Register.css'
import { Link } from "react-router-dom";


export default function Register() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const { user, setUser } = useContext(mycontx);
  const nav = useNavigate();

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  

  function RegisterBtn() {
    if (!name || !mail || !password || !confirm) {
      alert("Please fill in all fields");
    } else if (!validateEmail(mail)) {
      alert("Please enter a valid email address");
    } else if (user.find((userData) => userData.mail === mail)) {
      alert("User already registered.");
    } else if (password !== confirm) {
      alert("Password does not match the confirmed password");
    } 
    else if(user.find((data)=>data.mail===mail)){
      alert("User already registered");
      nav('/login');

  }
  
    else if (password.length<6){
alert("password must atleast contain  6 characters!");
    }
      else {
      const regUser = { name, mail, password, confirm };
      setUser([...user, regUser]);
      alert("Registration successful");
      nav("/login");
    }
  }

  console.log("user", user);

  return (
    <div className="register-container">
      <h1 className="title">Register</h1>
      <div className="input-container">
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <input
          type="email"
          value={mail}
          placeholder="Email"
          onChange={(e) => setMail(e.target.value)}
          className="input"
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <input
          type="password"
          value={confirm}
          placeholder="Confirm Password"
          onChange={(e) => setConfirm(e.target.value)}
          className="input"
        />
        <button className="register-button" onClick={RegisterBtn}>
          Register
        </button>
        <Link to='/login' className="log-reg">skip to login </Link>
      </div>
    </div>
  );
}