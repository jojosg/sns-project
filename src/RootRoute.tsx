import { Navigate, Route, Routes } from "react-router";

import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgotPassword";
import Index from "./pages/Index";
import PostDetail from "./pages/PostDetail";
import ProfileDetail from "./pages/ProfileDetail";
import ResetPassword from "./pages/ResetPassowrd";
import SignIn from "./pages/SignIn";
import GlobalLayout from "./components/layout/GlobalLayout";

export default function RootRoute() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="fotget-password" element={<ForgetPassword />} />
        <Route path="/" element={<Index />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/profile/:userId" element={<ProfileDetail />} />
        <Route path="/reset-passowrd" element={<ResetPassword />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
}
