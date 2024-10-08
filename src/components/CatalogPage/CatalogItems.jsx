import Button from "../Button/Button.jsx";
import "./CatalogPage.css"
import {useActions} from "../../hooks/useActions.js";

export default function CatalogItems({ image, text, sizes, discount, price, inStock, product }) {
    const { addToBasket } = useActions();

    const discountedPrice = discount ? (price - price * (discount / 100)) : price;

    return (
        <div className="catalog-item">
            <div className="catalog-item-image">
                <img src={image} alt="Image" />
            </div>
            <div className="catalog-item-details">
                <div className="catalog-item-text">{text}</div>
                <div className="catalog-item-sizes">
                    <ul>
                        {Array.isArray(sizes) ?
                          sizes.map((size, index) => <li key={index}>{size}</li>
                        ) : (
                          <li>{typeof sizes === "object" ? JSON.stringify(sizes) : sizes}</li>
                        )}
                    </ul>
                </div>
            </div>
            {discount ? (
                <div className="catalog-item-extra">
                    <div className="percent-of-discount">-{discount} %</div>
                    <div className="catalog-item-price"><s>{price} $</s></div>
                    <div className="discounted-item-price">{discountedPrice} $</div>
                    <div className="catalog-item-instock" style={{ color: inStock ? '#00FF00' : '#FF0000' }}>
                        {inStock ? 'В наличии' : 'Нет в наличии'}
                    </div>
                </div>
            ) : <div className="catalog-item-extra">
                <div className="catalog-item-price">{price} $</div>
                <div className="catalog-item-instock" style={{ color: inStock ? '#00FF00' : '#FF0000' }}>
                    {inStock ? 'В наличии' : 'Нет в наличии'}
                </div>
            </div>
            }
            <div className="catalog-item-button">
                <Button className="button catalog-btn" onClick={() => addToBasket(product)}>В корзину</Button>
            </div>
        </div>
    )
}