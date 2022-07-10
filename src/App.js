import React from "react";
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Addcandidate from "./adminpages/addcandidate";
import Adlogin from "./pages/Adlogin";
import Mainpage from "./pages/Mainpage";
import Signup from "./pages/Signup";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/"
            element={<Mainpage />} />
          <Route exact path="/signup"
            element={<Signup />} />
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

