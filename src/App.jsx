import { Routes, Route } from "react-router-dom";
import Dash from "./components/Dash";
import Login from "./components/Login";
import Sign from "./components/Sign";
import Update from "./components/Update";
import ResetPass from "./components/ResetPass";
import { AuthProvider } from "./context/AuthContext";
import Main from "./components/Main";
import Upload from "./components/Upload";
// import {useAuth} from "./context/AuthContext"
function App() {
  // const {currentUser}= useAuth();
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Dash />} />
          <Route path="sign" element={<Sign />} />
          <Route path="login" element={<Login />} />
          <Route path="update" element={<Update />} />
          <Route path="reset" element={<ResetPass />} />
          <Route path="main" element={<Main />} />
          <Route path="upload" element={<Upload />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
