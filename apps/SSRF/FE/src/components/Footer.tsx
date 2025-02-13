const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-400 to-indigo-600 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Meme Generator. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
