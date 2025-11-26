import style from './style.module.css'

export default function Button({ children, ...rest }) {
    return <button className={style.myButton} {...rest}>{children}</button>
}