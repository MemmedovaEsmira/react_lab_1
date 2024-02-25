
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import classNames from 'classnames';
import Cart_item from '../Cart-Item/Cart-item';
import styles from './cart.module.css';


const Cart = () => {

    const cart = useSelector((state: RootState) => state.addToCartReducer.items)
    const isActive = useSelector((state: RootState) => state.isActiveSliceReducer.isActive)
    const totalPrice = cart.reduce((total, item) => total + (item.count * item.price), 0)
    return (
        <>
        <div className={classNames(styles['cart'], { [styles['cart_active']]: isActive })}>
             {cart.length === 0 ? <h2> Cart is empty </h2> : null}
                <div className={styles['cart_container']}>
                    {cart.map((item) => {
                     return <Cart_item key={item.id} item={item} />
                    }

                    )}
                    <div className={styles.cart_container_total}>
                        <h3>Total : $  {Math.round(totalPrice)}</h3>                 
                    </div>

                </div>

            </div>
            
        </>
    )
}

export default Cart
