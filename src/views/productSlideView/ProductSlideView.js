import classes from "./ProductSlideView.module.css";

export default function ProductSlideView({ item }) {
  return (
    <div className={classes.productSlideView}>
      <img src={item.image} alt="img" />
      <div className={classes.details}>
        <h3>{item.title}</h3>
        <p>{item.details}</p>
      </div>
    </div>
  );
}
