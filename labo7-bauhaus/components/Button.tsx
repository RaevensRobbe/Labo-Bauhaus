import styles from '../styles/06-components/button.module.scss';

const Button = (props:any) => {
    return(
        <div className={`${styles.button}`}>
            <a className={`${styles.text}`} href={props.link}>{props.action}</a>
        </div>
    )
}

export default Button;