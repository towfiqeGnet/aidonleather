import Button from "../../../components/button/Button";
import Display from "../../../methods/displayItems/Display";
import classes from "./LatestTrend.module.css";
import pic01 from "./assets/01.png";
import pic02 from "./assets/02.png";
import pic03 from "./assets/03.png";
import pic04 from "./assets/04.png";
import LatestTrendView from "../../../views/latestTrendView/LatestTrendView";

export default function LatestTrend(params) {
  const imageList = [
    { id: 1, image: pic01 },
    { id: 2, image: pic02 },
    { id: 3, image: pic03 },
    { id: 4, image: pic04 },
  ];
  return (
    <div className={classes.latestTrend}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className={classes.leftPart}>
              <h3 className="pt-5 pb-3">LATEST TREND</h3>

              <p className="pe-0 pe-lg-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose</p>
              <div className={classes.btnContainer}>
                <Button title="Learn More" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div>
              <Display itemList={imageList} View={LatestTrendView} center noPadding />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
