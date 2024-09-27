import './DiscountSection.css'
import '../../App.css'
import { discountData } from "../../data.js"
import DiscountItems from "./DiscountItems.jsx";

export default function DiscountSection() {
    return (
        <section className="discount-section">
            <div className="container">
                <h1 className="common-title">Лучшие предложения</h1>
                <div className="discount-items">
                    {discountData.map(product => (
                        <DiscountItems
                            key={product.id}
                            image={product.image}
                            text={product.text}
                            sizes={product.sizes}
                            discount={product.discount}
                            price={product.price}
                            inStock={product.inStock}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}