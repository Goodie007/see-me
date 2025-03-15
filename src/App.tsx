
import "./App.css";
import Login from "./auth/login";
import SignUp from "./auth/signup";
import Layout from "./components/layout";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoCallScreen from "./videocallcomponents/videocallscreen";

function App() {

  return (
    <>
      <Router>
      <Routes>
      <Route path="/" element={<VideoCallScreen />} />
      <Route path="signup" element={<SignUp />} />
      </Routes>
      </Router>
      {/* <Layout /> */}
      
    </>
  );
}

export default App;
