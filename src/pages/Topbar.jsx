import { FiMenu, FiBell, FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";

const Topbar = ({ onSearch, toggleSidebar }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`topbar ${scrolled ? "scrolled" : ""}`}>
      {/* LEFT */}
      <div className="topbar-left">
        {/* MOBILE ONLY */}
        <button className="menu-btn" onClick={toggleSidebar}>
          <FiMenu />
        </button>

        <div className="search-box">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search transactions..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="topbar-right">
        <FiBell className="topbar-bell" />
        <div className="topbar-avatar">YR</div>
      </div>
    </header>
  );
};

export default Topbar;
