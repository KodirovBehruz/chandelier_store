import "../../App.css"
import "./Header.css"
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import logo_icon_black from "../../assets/icons/logo_icon.png"
import logo_icon_white from "../../assets/icons/logo_white.svg"
import login_icon from "../../assets/icons/login_icon.png"
import menu_icon from "../../assets/icons/menu_icon.svg"
import {useState} from "react";
import Basket from "./Basket.jsx";
import search_icon from "../../assets/icons/search_icon.png";
import all_icon from "../../assets/icons/all_icon.png";


export default function Header() {
    let [isBasketOpen, setIsBasketOpen] = useState(false);
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
            <div className="container-1200">
                <Link to='/'>
                    <div className="logo">
                        <img src={logo_icon_white} alt="Logo-Icon"/>
                    </div>
                </Link>
                <button className="button-categories">
                    <img src={all_icon} alt="All-Icon"/>Все
                </button>
                <div className="search-action">
                    <input type="text" placeholder="Название товара..." className="search-field"/>
                    <img src={search_icon} alt="Search-Icon" className="search-icon"/>
                </div>
                <div className='menu-icon'>
                    <img src={menu_icon} alt="Menu Icon"/>
                </div>
            </div>
            <div className="container">
                <Link to='/'>
                    <div className="logo">
                    <img src={logo_icon_black} alt="Logo-Icon"/>
                    </div>
                </Link>
                <nav className="menu">
                <ul>
                        <li onClick={() => scrollToSection('about-section')}>Информация</li>
                        <li>Производители</li>
                        <li onClick={() => scrollToSection('discount-section')}>Акции</li>
                        <li onClick={() => scrollToSection('reviews-section')}>Отзывы</li>
                        <li onClick={() => setIsBasketOpen(prevState => !prevState)}>Корзина</li>
                        {isBasketOpen && <Basket />}

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