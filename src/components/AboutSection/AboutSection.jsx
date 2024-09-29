import "../../App.css"
import "./AboutSection.css"
import AboutImage from "../../assets/images/about_img.png"
import { aboutData } from "../../data.js";
import AboutItems from "./AboutItems.jsx";

export default function AboutSection() {
    return (
        <section id='about-section' className="about-section">
            <div className="container">
                <h1 className="common-title">Почему наша платформа становится <span>выбором #1</span></h1>
                <img src={AboutImage} alt="About-Image" className="about-image" />
                <div className="about-items">
                    {aboutData.map(item => (
                        <AboutItems
                            key={item.text}
                            image={item.image}
                            icon={item.icon}
                            text={item.text}
                            button_text={item.button_text}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}