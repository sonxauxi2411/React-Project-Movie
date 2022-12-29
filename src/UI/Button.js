import style from "./Button.module.scss";
const Button = ({ children, onClick, className }) => {
  //   console.log(props.active);
  return (
    <div className={style.btn}>
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </div>
  );
};

export default Button;
