import {Link} from "react-router-dom";
import "./AboutSection.css"
import catalog_icon from "../../assets/icons/catalog_icon.png"
import Button from "../Button/Button.jsx";

export default function AboutItems({icon, text, button_text}) {
    return (
        <div className="about-item">
            <img src={icon} alt={icon} />
            <p>{text}</p>
            <Link to='/catalog'>
                {button_text && (
                  <Button className="button about-button">
                      <img src={catalog_icon} alt="Catalog-Icon" />
                      {button_text}
                  </Button>
                )}
            </Link>
        </div>
    )
}