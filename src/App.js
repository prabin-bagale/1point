import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          <Switch>
            <Route path="/" exact component={MainLayout} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/signUp" component={SignUp} />
            <PrivateRoute path="/orderNow" component={OrderNow} />
            <PrivateRoute path="/history" component={History} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/reset-password" component={ResetPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
