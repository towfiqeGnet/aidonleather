import classes from "./Navbar.module.css";
import logo from "./../../assets/images/logo1.png";

export default function Navbar(params) {
  return (
    <div className={classes.navbar}>
      <div className="container">
        <div className={classes.nav}>
          <div className={classes.brandLogo}>
            <img src={logo} alt="Logo" />
          </div>
          <div className={classes.menuIcon}>
            <i className="fas fa-bars fa-2x"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
