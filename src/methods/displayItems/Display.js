import classes from "./Display.module.css";

export default function Display({ itemList, View, type, center, noPadding, alignStart }) {
  let element;

  switch (type) {
    case "row":
      element = (
        <div className="row">
          {itemList?.map((item) => (
            <div key={item.id} className="col-12 col-lg-6">
              <View item={item} />
            </div>
          ))}
        </div>
      );

      break;

    default:
      element = (
        <div className={classes.displayContainer + " " + (center ? classes.center : "") + " " + (alignStart ? classes.alignStart : "")}>
          {itemList?.map((item) => (
            <div key={item.id} className={classes.itemContainer + " " + (noPadding && classes.paddingZero)}>
              <View item={item} />
            </div>
          ))}
        </div>
      );
      break;
  }

  return element;
}
