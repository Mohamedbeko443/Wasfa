/* eslint-disable prettier/prettier */

import {Route , Routes} from "react-router-dom"

import SignUp from "./features/auth/pages/SignUp";
import Login from "./features/auth/pages/Login";
import Nav from "./Nav";
import EmailConfirmation from "./features/auth/pages/EmailConfirmation";




function App() {
  return (
    <Routes>
      <Route element={<Nav/>} path="/"  />
      <Route element={<SignUp/>} path="/register"  />
      <Route element={<Login/>} path="/login"  />
      <Route element={<EmailConfirmation/>} path="/auth/email-confirmation"  />
    </Routes>
    );
}

export default App;
