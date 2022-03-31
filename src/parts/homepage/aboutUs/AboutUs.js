import Button from "../../../components/button/Button";
import classes from "./AboutUs.module.css";
import pic01 from "./assets/01.png";

export default function AboutUs(params) {
  return (
    <div className={classes.aboutUs}>
      <h4>ABOUT US</h4>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className={classes.leftPart}>
              <div className="pe-0 pe-lg-4">
                <p>We make you more creative, powering to go your own path.</p>
                <h5 className="pt-2 pb-1">Our Purpose</h5>
                <p>Creative works are our main aim. We thoughtfully create fashionable bags, belt, wallet and footwear with quality materials that make it possible for you to explore and discovered new places. Our aim supports a positive outlook on life. It is about being true to yourself. It is living an organised and stylish lifestyle both mentally and physically, where creative works more and more We are more creative for you and doing innovation everyday and we would love for you to us join!</p>
                <h5 className="pt-2 pb-1">Our People and Company Culture</h5>
                <p> We put our people first. We always have and we always will. We pride ourselves on creating an international working environment that celebrates differences and diversity.</p>
              </div>
              <div className={classes.btnContainer}>
                <Button title="Learn More" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={classes.imgContainer}>
              <div className={classes.image}>
                <img src={pic01} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
