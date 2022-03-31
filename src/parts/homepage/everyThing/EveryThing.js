import Display from "../../../methods/displayItems/Display";
import EveryThingView from "../../../views/everyThingView/EveryThingView";
import classes from "./EveryThing.module.css";
export default function EveryThing(params) {
  const itemList = [
    { id: 1, title: "01", text: "Aidon Leather Design Ltd. was founded in 2013 on the enduring principle of handmaking a product with the finest materials focused on quality, utility, and timeless design. Quality is an environmental issue. Every day we work on becoming a better brand-named FOLK and manufacturer for our community and our planet. How can we become your favorite brand-named FOLK?" },
    { id: 2, title: "02", text: "We are professional manufacturer and 8 years of professional experience, 1500 square working area, 30 skilled workers, 5 exclusive designer and managers." },
    { id: 3, title: "03", text: "Aidon Leather Design Factory is located in Dhaka City, Bangladesh. Many well-known products (Bay Emporium, RISE and EOLK), other brand products are produced by OEM." },
    { id: 4, title: "04", text: "The company successfully passed Sedex, certification and Leathergoods And Footwear Manufacturers & Exporters Association of Bangladesh (LFMEAB), and is an operating enterprise integrating R & D and sales." },
  ];
  return (
    <div className={classes.everyThing}>
      <h4>EVERYTHING YOU NEED TO KNOW</h4>

      <div className={classes.boxContainer}>
        <Display itemList={itemList} View={EveryThingView} center alignStart />
      </div>
    </div>
  );
}
