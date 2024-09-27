import './MainSection.css'
import '../../App.css'
import Button from "../Button/Button.jsx";
import bacgroundImage from '../../assets/images/background.png'
import catalogIcon from '../../assets/icons/catalog_icon.png'
import image1 from '../../assets/images/main_img_1.png'
import image2 from '../../assets/images/main_img_2.png'
import image3 from '../../assets/images/main_img_3.png'
import image4 from '../../assets/images/main_img_4.png'
import image5 from '../../assets/images/main_img_5.png'
import image6 from '../../assets/images/main_img_6.png'
import {useEffect, useState} from "react";

const images = [image1, image2, image3, image4, image5, image6]

export default function MainSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [fade, setFade] = useState('fade-in')

    useEffect(() => {
        const interval = setInterval(() => {
            setFade('fade-out') // Начало перехода
            setTimeout(() => {
                setCurrentIndex((prevIndex) => {
                    return prevIndex === images.length - 1 ? 0 : prevIndex + 1
                })
                setFade('fade-in') // Новое изображение появилось
            }, 1000); // Время для плавного перехода
        }, 3000)
        return () => clearInterval(interval)
    }, []);

    return (
        <section className="main-section">
            <div className="container">
                <img src={bacgroundImage} alt="Background" className="background-image" />
                <div className="main-info">
                    <h1 className="common-title">Элегантность в каждом луче.</h1>
                    <p className="common-text">
                        Наши люстры придадут вашему дому неповторимую атмосферу изысканности и стиля.
                        Создайте пространство, которое будет сиять роскошью и теплом.
                    </p>
                    <Button className="button">
                        <img src={catalogIcon} alt="Catalog-Icon" />
                        Перейти в каталог
                    </Button>

                    <div className="main-image">
                        <img
                            src={images[currentIndex]}
                            alt={`Slide ${currentIndex + 1}`}
                            className={fade}
                        />
                        <p className="main-image-text">
                            Нам доверяют более 10 000 довольных клиентов:
                            дизайнеры интерьеров, владельцы бизнеса, домовладельцы и любители стильных решений.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
