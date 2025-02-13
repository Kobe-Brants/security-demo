const NavigationBar = () => {
  return (
    <nav className="bg-gradient-to-br from-purple-400 to-indigo-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Meme Generator</h1>
        <div className="flex space-x-4">
          {/*<a href="#" className="text-white hover:text-yellow-300">*/}
          {/*  Home*/}
          {/*</a>*/}
          {/*<a href="#" className="text-white hover:text-yellow-300">*/}
          {/*  Products*/}
          {/*</a>*/}
          {/*<a href="#" className="text-white hover:text-yellow-300">*/}
          {/*  Cart*/}
          {/*</a>*/}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
