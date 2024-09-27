import "../../App.css"
import "./Footer.css"
import logo_white from "../../assets/icons/logo_white.svg"


export default function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-items">
                        <div className="footer-item">
                            <div className="logo-footer">
                                <img src={logo_white} alt="Logo-Icon" />
                            </div>
                            <ul>
                                <li>Пн-Пт: с 8:00 до 22:00</li>
                                <li>Сб-Вс: с 9:00 до 19:00</li>
                                <li>Праздники: с 9:00 до 19:00</li>
                            </ul>
                        </div>
                        <div className="footer-item">
                            <h1 className="footer-item-title">КОНТАКТЫ</h1>
                            <ul>
                                <li>+992902569900</li>
                                <li>info@lumos.tj</li>
                                <li>Instagram</li>
                                <li>Facebook</li>
                            </ul>
                        </div>
                        <div className="footer-item">
                            <h1 className="footer-item-title">ИНФОРМАЦИЯ</h1>
                            <ul>
                                <li>О платформе</li>
                                <li>Контакты</li>
                                <li>Производители</li>
                                <li>Отзывы</li>
                                <li>Гарантии</li>
                            </ul>
                        </div>
                        <div className="footer-item">
                            <h1 className="footer-item-title">КЛИЕНТАМ</h1>
                            <ul>
                                <li>Войти</li>
                                <li>Корзина</li>
                                <li>Избранное</li>
                                <li>Политика конфиденциальности</li>
                                <li>Сервисные центры</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-rights">
                        <p>© 2023-2024 Lumos. Все права защищены.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}