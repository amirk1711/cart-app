import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const { products } = props;
    return(
        <div className="cart">
            { products.map((product) => {
                return (
                    <CartItem style={styles.cartItem}
                        product = {product}
                        key = {product.id}
                        onIncreaseQuantity = {props.onIncreaseQuantity}
                        onDecreaseQuantity = {props.onDecreaseQuantity}
                        onDeleteProduct = {props.onDeleteProduct}
                    />
                );
            }) }
            
        </div>
    );
}

const styles = {
    cartItem: {
        justifyContent: 'space-around',
        alignItems: 'flex-end'
    }
}

export default Cart;