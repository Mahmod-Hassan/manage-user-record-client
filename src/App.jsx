import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import AddUserPage from "./pages/dashboard/AddUserPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import DashboardLayout from "./pages/dashboard/layout/DashboardLayout";

function App() {
  return (
    <div className="bg-red-50/25">
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/add-user" element={<AddUserPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
