import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="bg-gradient-to-br from-purple-400 to-indigo-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Meme Generator</h1>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-yellow-300">
            Home
          </Link>
          <Link to="/settings" className="text-white hover:text-yellow-300">
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
