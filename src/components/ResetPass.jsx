import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const email = useRef();
 
  const [loading, setLoading] = useState(false);
  const { resetEmail } = useAuth();
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
   
      await resetEmail(email.current.value)
      navigate("/login")
    } catch (error) {
   
    }
    setLoading(false);
  }

  return (
    <>
     <form action="" onSubmit={handleSubmit}>
         <label htmlFor="">Email</label>
         <input type="text" ref={email}/>
         <button disabled={loading}>Submit</button>
     </form>
    </>
  );
}

export default Login;
