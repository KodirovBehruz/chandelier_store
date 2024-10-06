import './Header.css';
import { useBasket } from '../../hooks/useBasket';
import { useActions } from '../../hooks/useActions';
import no_product from "../../assets/icons/dont-have-product.png"

export default function Basket() {
    const { basket } = useBasket();
    const { removeFromBasket, addToBasket } = useActions();

    const summa = basket.reduce((sum, item) => {
        const itemPrice = item.discount
          ? item.price - (item.price * item.discount) / 100
          : item.price;
        return sum + itemPrice * item.quantity;
    }, 0)

    return (
      <section className='basket-section'>
          <div>
              {basket.length === 0 ? (
                <>
                    <div className='empty-basket'>
                        <img src={no_product} className='no-product' alt='Dont have icon'/>
                        <p className='no-product-text'>Корзина пуста!</p>
                    </div>
                </>
              ) : (
                <div className='basket-items'>
                    {basket.map((item) => (
                      <div key={item.id} className='basket-item'>
                          <img src={item.image} alt={item.text}/>
                          <div className='basket-item-text'>{item.text}</div>

                          {item.discount && (
                            <div className="basket-item-price">{item.price - (item.price * item.discount) / 100} $</div>
                          )}

                          {!item.discount && <div className="basket-item-price">{item.price} $</div>}
                          <div className="basket-item-quantity-container">
                              <button className='button delete-unit-button' onClick={() => removeFromBasket(item.id)}>-</button>
                              <div className="basket-item-quantity">{item.quantity}</div>
                              <button className='button delete-unit-button' onClick={() => addToBasket(item)}>+</button>
                          </div>
                      </div>
                    ))}
                    <p className='basket-item-summa'>Сумма: {summa.toFixed(2)}$</p>
                </div>

              )}
          </div>
      </section>
    );
}
