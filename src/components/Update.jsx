import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Update() {
  const { currentUser, changeEmail, changePassword } = useAuth();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const [error, setError] = useState("");
  const [loading,setLoading] =useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    if (password.current.value !== confirmPassword.current.value) {
       return setError("Password don't same")
    }
    try {
        await changeEmail(email.current.value)
        await changePassword(password.current.value)
        setError("")
        navigate("/login")
    } catch (error) {
        setError(error)
    }
    setLoading(false)
  }

  return (
    <>
      {currentUser ? (
        <div>
          <h1>Update</h1>
          <p>email: {currentUser.email}</p>
          {error && <p>{error}</p>}
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">New Email</label>
            <input type="email" placeholder={currentUser.email} ref={email} />
            <label htmlFor="">New Password</label>
            <input type="text" ref={password} />
            <label htmlFor="">Confirm New Password</label>
            <input type="text" ref={confirmPassword} />
            <button disabled={loading}  >Submit</button>
          </form>
        </div>
      ) : (
        <p>
          You need to
          <Link to="/login">Login</Link>
        </p>
      )}
    </>
  );
}

export default Update;
