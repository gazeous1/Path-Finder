import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import SecondPage from "./pages/secondPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secondPage" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}
export default App;
