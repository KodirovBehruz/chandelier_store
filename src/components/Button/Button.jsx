import classes from "./Button.module.css";

export default function Button({children, className, onClick}) {
    const combinedClasses = `${classes.button} ${className || ''}`;
    return <button className={combinedClasses} onClick={onClick}>{children}</button>
}