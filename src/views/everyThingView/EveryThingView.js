import classes from "./EveryThingView.module.css";
export default function EveryThingView({ item }) {
  return (
    <div className={classes.everyThingView}>
      <h6>{item.title}</h6>

      <p>{item.text}</p>
    </div>
  );
}
