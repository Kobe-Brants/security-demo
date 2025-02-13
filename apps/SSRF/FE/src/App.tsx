import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import MemeFetcher from "./components/MemeFetcher.tsx";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <MemeFetcher />
      </main>
      <Footer />
    </div>
  );
};

export default App;
