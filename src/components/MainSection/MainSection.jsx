import './MainSection.css'
import '../../App.css'
import Button from "../Button/Button.jsx";
import backgroundImage from '../../assets/images/background.png'
import catalogIcon from '../../assets/icons/catalog_icon.png'
import { sliderData } from "../../data.js";
import Slider from "./Slider.jsx";


export default function MainSection() {

    return (
        <section className="main-section">
            <div className="container">
                <img src={backgroundImage} alt="Background" className="background-image" />
                <div className="main-info">
                    <h1 className="common-title">Элегантность в каждом луче.</h1>
                    <p className="common-text">
                        Наши люстры придадут вашему дому неповторимую атмосферу изысканности и стиля.
                        Создайте пространство, которое будет сиять роскошью и теплом.
                    </p>
                    <Button className="button">
                        <img src={catalogIcon} alt="Catalog-Icon"/>
                        Перейти в каталог
                    </Button>

                    <div className="main-image">
                        <Slider slides={sliderData} />
                    </div>
                    <p className="main-image-text">
                        Нам доверяют более 10 000 довольных клиентов:
                        дизайнеры интерьеров, владельцы бизнеса, домовладельцы и любители стильных решений.
                    </p>
                </div>
            </div>
        </section>
    )
}
