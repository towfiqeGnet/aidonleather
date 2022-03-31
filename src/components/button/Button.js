import classes from "./Button.module.css";

export default function Button({ title, icon, onClicked }) {
  return (
    <>
      <button className={classes.buttonContainer}>
        {title}
        {icon && <span>{icon}</span>}
      </button>
    </>
  );
}
