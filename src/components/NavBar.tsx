
const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <button
        onClick={toggleSidebar}
        className="text-3xl focus:outline-none"
      >
        &#9776; 
      </button>
      <nav>
        <h1 className="text-xl">Website</h1>
      </nav>
    </header>
  );
};

export default Navbar;