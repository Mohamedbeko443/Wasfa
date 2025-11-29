/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */

import {HeroUIProvider} from '@heroui/react'
import {ToastProvider} from "@heroui/toast";

import {Route , Routes} from "react-router-dom"

import SignUp from "./features/auth/pages/SignUp";
import Login from "./features/auth/pages/Login";
import EmailConfirmation from "./features/auth/pages/EmailConfirmation";
import ForgotPassword from "./features/auth/pages/ForgotPassword";
import MainLayout from "./common/layout/MainLayout";
import Home from "./features/home/pages/index"




function App() {
  return (
    <HeroUIProvider>
    <ToastProvider/>
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      
      <Route element={<SignUp/>} path="/register"  />
      <Route element={<Login/>} path="/login"  />
      <Route element={<EmailConfirmation/>} path="/users/:userId/verify/:token"  />
      <Route element={<ForgotPassword/>} path="/auth/forgot-password"  />
    </Routes>
    </HeroUIProvider>
    );
}

export default App;
