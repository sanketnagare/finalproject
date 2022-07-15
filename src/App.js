import React, { useState } from "react";
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Addcandidate from "./adminpages/addcandidate";
import Adlogin from "./adminpages/Adlogin";
import Login from "./pages/login/login";
import Mainpage from "./pages/mainpage/Mainpage";
import Register from "./pages/register/register";
import Dashboard from "./userpages/dashboard";
function App() {

  const [user, setLoginUser] = useState("")

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/"
            element={<Mainpage />} />

          <Route exact path="/login"
            element={<Login setLoginUser={setLoginUser} />} />

          <Route exact path="/register"
            element={<Register />} />

          <Route exact path="/dashboard"
            element={user && user._id
              ?
              <Dashboard setLoginUser={setLoginUser} />
              :
              <Mainpage setLoginUser={setLoginUser} />
            } />

          <Route exact path="/adlogin"
            element={<Adlogin />} />

          <Route exact path="/addcandidate"
            element={<Addcandidate />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

