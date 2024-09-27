import Button from "../Button/Button.jsx";
import './DiscountSection.css'
import '../../data.js'

export default function DiscountItems({ image, text, sizes, discount, price, inStock }) {
    const discountedPrice = discount ? (price - (price * discount) / 100).toFixed(2) : price
    return (
        <div className="discount-item">
            <div className="discount-item-image">
                <img src={image} alt="Image" />
            </div>
            <div className="discount-item-details">
                <div className="discount-item-text">{text}</div>
                <div className="discount-item-sizes">
                    <ul>
                        {sizes.map((size, index) => <li key={index}>{size}</li>)}
                    </ul>
                </div>
            </div>
            {discount ? (
                <div className="discount-item-extra">
                    <div className="percent-of-discount">-{discount} %</div>
                    <div className="discount-item-price"><s>{price} $</s></div>
                    <div className="discount-item-price">{discountedPrice} $</div>
                    <div className="discount-item-instock" style={{ color: inStock ? '#00FF00' : '#FF0000' }}>
                        {inStock ? 'В наличии' : 'Нет в наличии'}
                    </div>
                </div>
            ) : <div className="discount-item-extra">
                    <div className="discount-item-price">{price} $</div>
                    <div className="discount-item-instock" style={{ color: inStock ? '#00FF00' : '#FF0000' }}>
                        {inStock ? 'В наличии' : 'Нет в наличии'}
                    </div>
            </div>
            }
            <div className="discount-item-button">
                <Button className="button discount-btn">В корзину</Button>
            </div>
        </div>
    )
}