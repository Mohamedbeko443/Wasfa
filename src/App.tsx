import {HeroUIProvider} from '@heroui/react'
import {ToastProvider} from "@heroui/toast";
import { Navigate, Route , Routes } from "react-router-dom"

import SignUp from "./features/auth/pages/SignUp";
import Login from "./features/auth/pages/Login";
import EmailConfirmation from "./features/auth/pages/EmailConfirmation";
import ForgotPassword from "./features/auth/pages/ForgotPassword";
import MainLayout from "./common/layout/MainLayout";
import Home from "./features/home/pages/index"
import ResetPassword from './features/auth/pages/ResetPassword';
import RecipePage from './features/recipe/pages/RecipePage';
import useAuthStore from './features/auth/store/auth';
import SearchPage from './features/search/pages/SearchPage';




function App() {
  const { accessToken } = useAuthStore();

  return (
    <HeroUIProvider>
    <ToastProvider/>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} /> 
        <Route path='recipe/:id' element={<RecipePage/>} /> 
        <Route path='search' element={<SearchPage/>} /> 
      </Route>

      <Route element={accessToken ? <Navigate to="/" /> : <SignUp/>} path="/register"  />
      <Route element={accessToken ? <Navigate to="/" /> : <Login/>} path="/login"  />
      <Route element={accessToken ? <Navigate to="/" /> : <EmailConfirmation/>} path="/users/:userId/verify/:token"  />
      <Route element={accessToken ? <Navigate to="/" /> : <ForgotPassword/>} path="/auth/forgot-password"  />
      <Route element={accessToken ? <Navigate to="/" /> : <ResetPassword/>} path="/users/:userId/reset-password/:token"  />
    </Routes>
    </HeroUIProvider>
    );
} 

export default App;
