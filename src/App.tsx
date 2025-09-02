/* eslint-disable prettier/prettier */

import {Route , Routes} from "react-router-dom"

import SignUp from "./features/auth/components/SignUp";
import Login from "./features/auth/components/Login";




function App() {
  return (
    <Routes>
      <Route element={<p>home</p>} path="/"  />
      <Route element={<SignUp/>} path="/register"  />
      <Route element={<Login/>} path="/login"  />
    </Routes>
    );
}

export default App;
