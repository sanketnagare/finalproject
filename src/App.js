import React from "react";
import Mainpage from "./Mainpage";
import Signup from "./Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App(){

  return(
  <>
      <Router>
   <Routes>
<Route exact path="/" 
                       element={<Mainpage/>} />

<Route exact path="/signup" 
        element={<Signup/>} />
</Routes>
      </Router>
    </>
  );
}

export default App;

