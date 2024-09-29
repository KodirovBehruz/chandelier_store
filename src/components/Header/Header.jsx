import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import logo_icon from "../../assets/icons/logo_icon.png"
import login_icon from "../../assets/icons/login_icon.png"
import "../../App.css"
import "./Header.css"


export default function Header() {
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <header className="header">
            <div className="container">
                <Link to='/'>
                    <div className="logo">
                        <img src={logo_icon} alt="Logo-Icon"/>
                    </div>
                </Link>
                <nav className="menu">
                    <ul>
                        <li onClick={() => scrollToSection('about-section')}>Информация</li>
                        <li>Производители</li>
                        <li onClick={() => scrollToSection('discount-section')}>Акции</li>
                        <li onClick={() => scrollToSection('reviews-section')}>Отзывы</li>
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