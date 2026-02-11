import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewPage from "./pages/NewPage";
import Bruna from "./pages/Bruna";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewPage />} />
        <Route path="/bruna" element={<Bruna />} />
      </Routes>
    </Router>
  );
}

export default App;
