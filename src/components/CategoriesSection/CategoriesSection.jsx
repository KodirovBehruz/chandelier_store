import all_icon from "../../assets/icons/all_icon.png"
import search_icon from "../../assets/icons/search_icon.png"
import "../../App.css"
import "./CategoriesSection.css"

export default function CategoriesSection() {
    return (
        <section className="categories-section">
            <div className="container">
                <button className="button-categories">
                    <img src={all_icon} alt="All-Icon" />Все
                </button>
                <button className="button-categories">Люстры</button>
                <button className="button-categories">Светильники</button>
                <button className="button-categories">Настенные</button>
                <button className="button-categories">Настольные</button>
                <button className="button-categories">Лампочки</button>
                <div className="search-action">
                    <input type="text" placeholder="Название товара..." className="search-field" />
                        <img src={search_icon} alt="Search-Icon" className="search-icon" />
                </div>
            </div>
        </section>
    )
}