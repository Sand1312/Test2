import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { login } from "./api";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import AddressFrom from "./Form";

export default function App() {
  // const [position, setPosition] = useState<"start" | "end">("end");
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/form" element={<AddressFrom />} />
      </Routes>
    </Router>
  );
}
