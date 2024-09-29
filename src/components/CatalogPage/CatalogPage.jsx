import './CatalogPage.css'
import '../../App.css'
import { catalogData } from "../../data.js"
import CatalogItems from "./CatalogItems.jsx";

export default function CatalogPage() {
    return (
        <section className="catalog-page">
            <div className="container">
                <h1 className="common-title">Каталог</h1>
                <div className="catalog-items">
                    {catalogData.map(product => (
                        <CatalogItems
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