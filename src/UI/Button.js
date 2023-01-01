import style from './Button.module.scss'
const Button = ({ children, onClick, active }) => {
  //   console.log(props.active);
  return (
    <div className={style.btn}>
      <button onClick={onClick} className={active ? style.active : ''}>
        {children}
      </button>
    </div>
  )
}

export default Button
