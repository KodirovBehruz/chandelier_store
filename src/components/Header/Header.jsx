import logo_icon from "../../assets/icons/logo_icon.png"
import login_icon from "../../assets/icons/login_icon.png"
import "../../App.css"
import "./Header.css"


export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src={logo_icon} alt="Logo-Icon"/>
                </div>
                <nav className="menu">
                    <ul>
                        <li>Информация</li>
                        <li>Производители</li>
                        <li>Акции</li>
                        <li>Отзывы</li>
                        <li>Корзина</li>
                        <li>Контакты</li>
                        <li>О платформе</li>
                    </ul>
                </nav>
                <button className="login-button">
                    <img src={login_icon} alt="Login-Icon"/>
                    Войти
                </button>
            </div>
        </header>
    )
}