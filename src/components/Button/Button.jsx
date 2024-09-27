import classes from "./Button.module.css";

export default function Button({children, className}) {
    const combinedClasses = `${classes.button} ${className || ''}`;
    return <button className={combinedClasses}>{children}</button>
}