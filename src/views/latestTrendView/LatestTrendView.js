import classes from "./LatestTrendView.module.css";
export default function LatestTrendView({ item }) {
  return (
    <div className={classes.latestView}>
      <img src={item.image} alt="trendImage" />
    </div>
  );
}
