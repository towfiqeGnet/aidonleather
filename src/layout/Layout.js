import { Route, Switch } from "react-router";
import HomePage from "../pages/homePage/HomePage";
import Footer from "../parts/footer/Footer";
import Navbar from "../parts/navbar/Navbar";
import classes from "./Layout.module.css";

export default function Layout(params) {
  return (
    <div className={classes.Layout}>
      <Navbar />
      <div className={classes.body}>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
