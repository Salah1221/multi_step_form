import { Route, Routes } from "react-router-dom";
import Info from "./Info";
import Plan from "./Plan";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/addons" element={<Info />} />
          <Route path="/summary" element={<Info />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
