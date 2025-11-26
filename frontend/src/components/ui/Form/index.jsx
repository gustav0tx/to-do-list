import style from './style.module.css'

export default function Form({ children, ...rest }) {
    return <form className={style.myForm} {...rest}>{children}</form>
}