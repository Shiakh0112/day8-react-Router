import { Routes, Route } from "react-router-dom";
import Home from "./componenets/Home";
import Login from "./componenets/Login";
import Users from "./componenets/Users";
import Nav from "./componenets/Nav";
function App() {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
