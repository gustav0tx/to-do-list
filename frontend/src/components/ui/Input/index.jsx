import style from './style.module.css'
export default function Input({ children, type, ...rest }) {
    return  (
        <label className={style.myLabel}>
            {children} <br />
            <input type={type} className={style.myInput} {...rest} />
        </label>
    )
}