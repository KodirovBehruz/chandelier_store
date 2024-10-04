import './CatalogPage.css'
import '../../App.css'
import { catalogData } from "../../data.js"
import CatalogItems from "./CatalogItems.jsx";
import no_product from "../../assets/icons/dont-have-product.png"

// eslint-disable-next-line react/prop-types
export default function CatalogPage({ searchQuery, selectedCategory }) {
    const filteredProducts = catalogData.filter(product => {
        // eslint-disable-next-line react/prop-types
        const matchesSearch = product.text.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <section className="catalog-page">
            <div className="container">
                <h1 className="common-title">Каталог</h1>
                {filteredProducts.length > 0 ? (
                  <div className="catalog-items">
                      {filteredProducts.map(product => (
                        <CatalogItems key={product.id} {...product} product={product}
                        />
                      ))}
                  </div>
                ) :
                  <div className="catalog-no-products">
                      <h1>Нет товаров, соответствующих вашему запросу!</h1>
                      <p>Попробуйте изменить параметры поиска или зайдите позже, когда ассортимент обновится.</p>
                      <img src={no_product} alt="No Product" />
                  </div>
                }
            </div>
        </section>
    )
}