import classes from "./Input.module.css";

const Input = ({ label, onChanged, name, placeholder, value, type, icon }) => {
  return (
    <>
      {label && <label className="text-capitalilabel">{label}</label>}
      <div className={classes.customInput}>
        <div className="px-2 d-flex align-items-center">
          {type === "textarea" ? <textarea placeholder={placeholder ? placeholder : ""} onChange={onChanged} value={value} type="text" /> : <input placeholder={placeholder ? placeholder : ""} onChange={onChanged} value={value} type={type} />}

          {icon && icon}
        </div>
      </div>
    </>
  );
};
export default Input;
