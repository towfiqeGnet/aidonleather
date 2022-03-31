import { useEffect, useRef } from "react";
import classes from "./Modal.module.css";
// import ModalView from "./ModalView";

export default function Modal({ show, setShow, View }) {
  const viewRef = useRef();
  const modalRef = useRef();

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (viewRef.current && !viewRef.current.contains(e.target)) {
        setShow(false);
      }
    });
  }, [show, setShow]);

  return (
    <div ref={modalRef} className={show ? classes.modalContainer : "d-none"}>
      <div ref={viewRef} className={classes.viewContainer}>
        {/* <div className={classes.modalContent}></div> */}

        <View onClicked={() => setShow(false)} show={show} />
      </div>
    </div>
  );
}
