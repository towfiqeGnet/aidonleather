import classes from "./ProductShow.module.css";
import pic01 from "./assets/01.png";
import pic02 from "./assets/02.png";
import pic03 from "./assets/03.png";
import pic04 from "./assets/04.png";
import pic05 from "./assets/05.png";
import pic06 from "./assets/06.png";

import ProductSlide from "../../../methods/ReactSlick/productSlide/ProductSlide";
import ProductSlideView from "../../../views/productSlideView/ProductSlideView";

export default function ProductShow(params) {
  const itemList = [
    { id: 1, image: pic04, title: "Our Buyers", details: "Our customers would like to touch, feel and giving idea of products improvement and we are dedicated for customer satisfaction." },
    { id: 2, image: pic01, title: "Briefcase", details: "A briefcase is a soft, two ton cow finish leather and case used mainly commonly use briefcase men's official and traveling purpose where papers, laptop, and equipped with a handle." },
    { id: 3, image: pic05, title: "Leather Shoes", details: "When the sole of a shoe is made of leather, it's called handmade leather sole. Sole leather is thick (2.6 - 6 mm) not very pliable abs solid vegetable-tanned leather." },
    { id: 4, image: pic02, title: "A bundle of Bags", details: "Genuine leather personalized, luxury diaper ladies bags, handmade with exclusive print bags and decorative stitching make more beautiful and innovative." },
    { id: 5, image: pic03, title: "Thread", details: "Use these nylon thread for all kind of leather bags, shoes, wallet, bets, stitching with appropriate size and thickness." },
    { id: 6, image: pic06, title: "Office Pen and Card Holder", details: " A quality pen and card holder with phone stand become functional and daily using as a part of daily life." },
    
  ];
  return (
    <div className={classes.productShow}>
      <ProductSlide View={ProductSlideView} itemList={itemList} />
    </div>
  );
}
