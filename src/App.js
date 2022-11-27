import React, { useState } from "react";
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Adlogin from "./adminpages/Adlogin";
import Admindashboard from "./adminpages/admindashboard";
import Dashboard from "./backerpages/backerdashboard/dashboard";
import Login from "./backerpages/login/login";
import Mainpage from "./backerpages/mainpage/Mainpage";
import Register from "./backerpages/register/register";
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

          <Route exact path="/admindashboard"
            element={<Admindashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

