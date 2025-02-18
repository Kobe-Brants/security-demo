import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import MemeFetcher from "./components/MemeFetcher.tsx";
import Settings from "./components/Settings.tsx";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MemeFetcher />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
