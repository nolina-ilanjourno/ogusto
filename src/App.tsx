import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reservation" element={<Reservation />} />
            </Routes>
          </HashRouter>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
