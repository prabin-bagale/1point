import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import OrderNow from "./components/OrderNow";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";
import Profile from "./components/Profile";
import ResetPassword from "./components/ResetPassword";
import History from './components/history';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/orderNow" element={<PrivateRoute><OrderNow /></PrivateRoute>} />
            <Route path="/history" element={<PrivateRoute><History /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
