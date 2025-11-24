import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="link">Home</Link>
      <Link to="/leaderboard" className="link">Leaderboard</Link>
      <Link to="/redeem" className="link">Redeem</Link>
      <Link to="/about" className="aboutLink">About JalQuest</Link>
    </nav>
  );
};

export default Navbar;
