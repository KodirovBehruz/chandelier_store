import "./DiscountSection.css"
import '../../App.css'
import { catalogData } from "../../data.js";
import CatalogItems from "../CatalogPage/CatalogItems.jsx";

export default function DiscountSection() {
    const discountProducts = catalogData.filter(product => product.discount > 0)

    return (
        <section id='discount-section' className="discount-section">
            <div className="container">
                <h1 className="common-title">Лучшие предложения</h1>
                <div className="discount-items">
                    {discountProducts.map(product => <CatalogItems key={product.id} {...product} product={product} />)}
                </div>
            </div>
        </section>
    )
}