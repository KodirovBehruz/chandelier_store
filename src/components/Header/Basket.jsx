import './Header.css';
import { useBasket } from '../../hooks/useBasket';
import { useActions } from '../../hooks/useActions';
import { FaTrash } from 'react-icons/fa';

export default function Basket() {
    const { basket } = useBasket();
    const { removeFromBasket, deleteItem } = useActions();

    const summa = basket.reduce((sum, item) => {
        const itemPrice = item.discount
          ? item.price - (item.price * item.discount) / 100
          : item.price;
        return sum + itemPrice * item.quantity;
    }, 0)

    return (
      <section className='basket-section'>
          {basket.length === 0 ? (
            <>
                <h1>Корзина пуста</h1>
                <div className='basket-items'></div>
                {/*<img src='public/dont-have-icon.png' alt='Dont have icon' />*/}
            </>
          ) : (
            <div className='basket-items'>
                {basket.map((item) => (
                  <div key={item.id} className='basket-item'>
                      <img src={item.image} alt={item.text}/>
                      <div className='basket-item-text'>{item.text}</div>
                      <div className="basket-item-quantity">
                          Количество: {item.quantity}
                      </div>

                      {item.discount && (
                        <div className="basket-item-price">{item.price - (item.price * item.discount) / 100} $</div>
                      )}

                      {!item.discount && <div className="basket-item-price">{item.price} $</div>}
                      <button onClick={() => removeFromBasket(item.id)}>Убрать 1</button>
                      <FaTrash className='basket-delete-icon' onClick={() => deleteItem(item.id)}/>
                  </div>
                ))}
                <p className='basket-item-summa'>Сумма: {summa.toFixed(2)}$</p>
            </div>

          )}
      </section>
    );
}
