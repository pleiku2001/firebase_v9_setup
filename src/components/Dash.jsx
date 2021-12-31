import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
function Dash() {
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();
  // const img = currentUser.providerData[0].photoURL;
  // const name = currentUser.providerData[0].displayName;
  // console.log(currentUser)
  //   console.log(currentUser.providerData[0].photoURL)
  async function handleClick() {
    try {
      await logout();

      //   console.log("thanh cong");
      navigate("/login");
    } catch (error) {
      //   console.log(error);
    }
  }
  return (
    <div>
      Main
      {/* <img src={img} alt=""  width={300} height={300}/>
       <div>name: {name}</div> */}
     
      <Link to="/login">login</Link>
      <p>
        {currentUser && (
          <div>
            <button onClick={handleClick}>Sign out</button>
            <p>
              <Link to="/update"> Update your profile </Link>
            </p>
          </div>
        )}
      </p>
    </div>
  );
}

export default Dash;
