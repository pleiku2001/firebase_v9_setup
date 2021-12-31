import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sign() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

async function handleSubmit(e){
    e.preventDefault()
    if(passwordConfirmRef.current.value !== passwordRef.current.value){
        return  setError("Password don't match !!!")
    }
    try {
        setLoading(true)
        setError("")
        await signup(emailRef.current.value,passwordRef.current.value)
        navigate("/login")
    } catch (error) {
        setError("Fail to create Account")
    }
    setLoading(false)
}


  return (
    <div>
     
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input type="email" ref={emailRef} required />
        <label htmlFor="">Password</label>
        <input type="text" ref={passwordRef} required />
        <label htmlFor="">Confirm Password</label>
        <input type="text" ref={passwordConfirmRef} required />
        <button disabled={loading}>Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Log In</Link></p>
    </div>
  );
}

export default Sign;
