import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";



function Login() {
  const email = useRef();
  const password = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login,google } = useAuth();
  const navigate = useNavigate();




  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      await login(email.current.value,password.current.value)
      navigate("/")
    } catch (error) {
      setError("Can't login !!!");
    }
    setLoading(false);
  }
  
  function handleGoogle(){
    google()
    navigate("/")
  }

  return (
    <>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input type="email" ref={email} required />
        <label htmlFor="">Password</label>
        <input type="text" ref={password} required />
        <button disabled={loading}>Sign In</button>
      </form>
      <p>
        Forget your password. Click <Link to="/sign">here</Link> to register or reset password <Link to="/reset">Reset</Link>
      </p>

      <p><button onClick={handleGoogle}>Sign with Google </button></p>
    </>
  );
}

export default Login;
