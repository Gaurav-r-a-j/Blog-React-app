import './App.css';
import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {

  const user = false;

  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={user?<Navigate to={"/"} replace/>:<Register/>} />

        <Route path="/login" element={user?<Navigate to={"/"} replace/>:<Login />} />

        <Route path="/write" element={user?<Write/>:<Navigate to={"/register"} replace/>} />

        <Route path="/settings" element={user?<Settings/>:<Navigate to={"/register"} replace/>} />

        <Route path="/post/:postId" element={<Single />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
