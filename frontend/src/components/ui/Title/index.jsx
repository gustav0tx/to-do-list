import style from './style.module.css'

export default function Title({ children }) {
    return <h3 className={style.myTitle}>{children}</h3>
}