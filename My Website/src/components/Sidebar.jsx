import React,{useState,} from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";


function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navigate=useNavigate();

  return (
    <>
      <div className="hamburger-menu">
        <RxHamburgerMenu onClick={toggleMenu} size={20} />
      </div>
      <div className={`Sidebar-container ${menuOpen ? 'open' : ''}`}>
        <div className="baslik">
          SECTİONS
        </div>
        <ul>
          <li onClick={()=>navigate("/")}>Home</li>
          <li onClick={()=>navigate("/about")}>About</li>
          <li onClick={()=>navigate("/contact")}>Contact</li>
          <li onClick={()=>navigate("/products")}>Products</li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
