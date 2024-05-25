import { useContext, useState } from "react";
import { mycontx } from "../Context";
import { useNavigate } from "react-router-dom";
import '../css/Adminreg.css';
function Adminreg() {
    const [username, setusername] = useState("");
    const [apassword, setApassword] = useState("");
    const { user, setUser } = useContext(mycontx);
    const adminuser = { username, setusername, apassword, setApassword };
  
    const nav = useNavigate();
  
    function submit() {
      if (user.find((Data) => Data.username !== "Admin")) {
        alert("Username is incorrect");
      } else if (apassword !== "admin@123") {
        alert("Password is incorrect");
      } else {
        setUser([...user, adminuser]);  
        alert("Login successful");
        nav("/adm");
      }
    }
  
    return (
      <div className="admin-form-container">
        <h2 className="heading">Admin Login</h2>
        <input
          type="text"
          className="admin-input"
          placeholder="USERNAME"
          onChange={(e) => setusername(e.target.value)}
        />
        <br />
        <input
          type="password"
          className="admin-input"
          placeholder="PASSWORD"
          onChange={(e) => setApassword(e.target.value)}
        />
        <br />
        <button className="admin-button" onClick={submit}>
          Login
        </button>
      </div>
    );
  }
export default Adminreg