import { listData } from "./dummyData/listData";
import classes from "./Footer.module.css";
import pic1 from "./assets/01.png";
import pic2 from "./assets/02.png";
import pic3 from "./assets/03.png";
import pic4 from "./assets/04.png";
import logo from "./assets/logo2.png";

export default function Footer(params) {
  return (
    <div className={classes.footer}>
      <div className="container">
        <div className="row">
          <div className="py-4 py-lg-0   col-12 col-lg-4">
            <div className={classes.logo}>
              <img src={logo} alt="logo" />
            </div>
            <ul className={classes.listGroup}>
              {listData?.map((li) => (
                <li key={li.id}>
                  <span>{li.icon}</span>
                  {li.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="py-4 py-lg-0  p col-12 col-lg-4">
            <div className={classes.images}>
              <div className="row ">
                <div className="col-6">
                  <img src={pic1} alt="img" />
                </div>
                <div className="col-6">
                  <img src={pic2} alt="img" />
                </div>
                <div className="col-6">
                  <img src={pic3} alt="img" />
                </div>
                <div className="col-6">
                  <img src={pic4} alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 py-lg-0   col-12 col-lg-4">
            <div className="d-flex flex-column align-items-center align-items-lg-end">
              <h4 className=" pb-4 text-white op-8">LET'S KEEP IN TOUCH</h4>
              <div>
                <div className={classes.subscribe}>
                  <input type="text" placeholder=" &#xf0e0;" />
                  <h6>SUBSCRIBE</h6>
                </div>
                <div className="py-2 d-flex align-items-center">
                  <input type="checkbox" />
                  <p className="ms-2">
                    i've read and accept aidonleather's <span>Privacy Policy</span>
                  </p>
                </div>
              </div>
              <div className={classes.social}>
                <div>
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div>
                  <i className="fab fa-twitter"></i>
                </div>
                <div>
                  <i className="fab fa-instagram"></i>
                </div>
                <div>
                  <i className="fab fa-linkedin-in"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.copyWrite}>
        <p>
          <span className="me-2">
            <i className="far fa-copyright"></i>
          </span>
          Aidon Leather Design Ltd. All Rights Reserved. Designed by
          <a className="mx-2" href="https://generationnetltd.com/">
            Generation Net Ltd
          </a>
        </p>
      </div>
    </div>
  );
}
