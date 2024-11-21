import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"; 

const Navbar = () => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchBarVisible(prevState => !prevState);
  };

  return (
    <nav className="bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          JobSphere
        </Link>
        {/* Search Icon from the public/images folder */}
        <button onClick={toggleSearchBar} className="p-2 bg-transparent">
          <img src="/images/search.png" alt="Filter" className="w-7 h-7 text-white" />
        </button>
      </div>
      
      {isSearchBarVisible && <SearchBar />}
    </nav>
  );
};

export default Navbar;
