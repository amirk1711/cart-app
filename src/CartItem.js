import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 7999,
            title: 'Phone',
            qty: 1,
            img: ''
        }

        // this.increaseQuantity = this.increaseQuantity.bind(this);
        // or use increaseQuantity func as arrow func
    }

    increaseQuantity = () => {
        console.log('this.state', this.state);
    }
    
    render() {
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 25} }>{title}</div>
                    <div style={ {color: '#777'} }>Rs {price}</div>
                    <div style={ {color: '#777'} }>Qty: {qty}</div>

                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1620199188~hmac=d9eba6e0233bc980703b0e4fb3818ac5"
                        onClick={this.increaseQuantity}
                        />
                        {/* bind here or in the cunstructor */}
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1620199059~hmac=f4a3e462a2f1708008d1b2c4361b871b"
                        />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1620199259~hmac=77d153aa993f1eda5a4ab9123f23c47f"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;