import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import UserExist from "./components/UserExist";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import AddUserPage from "./pages/dashboard/AddUserPage";
import AllUsers from "./pages/dashboard/AllUsers";
import DashboardLayout from "./pages/dashboard/layout/DashboardLayout";

function App() {
  return (
    <div className="bg-red-50/25">
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={
            <UserExist>
              <SignupPage />
            </UserExist>
          }
        />
        <Route
          path="/login"
          element={
            <UserExist>
              <LoginPage />
            </UserExist>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard" element={<AllUsers />} />
          <Route path="/dashboard/add-user" element={<AddUserPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
