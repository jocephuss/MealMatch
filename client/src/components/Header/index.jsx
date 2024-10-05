import { Link } from "react-router-dom";
import Navigation from "../Navigation/index";
// import Auth from '../../utils/auth';

// const Header = () => {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };
const Header = () => {
  return <Navigation />;
};

export default Header;
