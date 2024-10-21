import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { UrheilijaProvider } from "./context/UrheilijaContext";
import UrheilijaLista from "./components/UrheilijaLista";
import LisaaUrheilija from "./components/LisaaUrheilija";
import MuokkaaUrheilija from "./components/MuokkaaUrheilija";
import UrheilijaTiedot from "./components/UrheilijaTiedot";

function App() {
  return (
    <UrheilijaProvider>
      <Router>
        <div className="App">
          <nav className="navbar">
            <Link to="/">Lista urheilijoista</Link>
            <Link to="/lisaa">Lisää</Link>
          </nav>
          <div className="container">
            <Routes>
              <Route path="/" element={<UrheilijaLista />} />
              <Route path="/lisaa" element={<LisaaUrheilija />} />
              <Route path="/urheilija/:id" element={<UrheilijaTiedot />} />
              <Route path="/muokkaa/:id" element={<MuokkaaUrheilija />} />
            </Routes>
          </div>
        </div>
      </Router>
    </UrheilijaProvider>
  );
}

export default App;
