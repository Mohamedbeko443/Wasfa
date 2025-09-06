/* eslint-disable prettier/prettier */

import {Route , Routes} from "react-router-dom"

import SignUp from "./features/auth/pages/SignUp";
import Login from "./features/auth/pages/Login";
import EmailConfirmation from "./features/auth/pages/EmailConfirmation";
import ForgotPassword from "./features/auth/pages/ForgotPassword";
import MainLayout from "./common/components/MainLayout";




function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<div>Home Page</div>} />
      </Route>
      <Route element={<SignUp/>} path="/register"  />
      <Route element={<Login/>} path="/login"  />
      <Route element={<EmailConfirmation/>} path="/auth/email-confirmation"  />
      <Route element={<ForgotPassword/>} path="/auth/forgot-password"  />
    </Routes>
    );
}

export default App;
