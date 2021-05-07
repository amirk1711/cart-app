import React from 'react';

class CartItem extends React.Component {
    

    increaseQuantity = () => {
        // console.log('this.state', this.state);
        // this.state.qty += 1;

        // setState(used to tell the react that state has changed) Form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        // setState form 2 - if prevState required then use this form
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }

    decreaseQuantity = () => {
        const { qty } = this.state;
        if(qty === 0){
            return;
        }
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        });
    }
    
    render() {
        // console.log('this.props', this.props);
        const { price, title, qty } = this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt=''/>
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
                        src="https://image.flaticon.com/icons/svg/992/992651.svg"
                        onClick={this.increaseQuantity}
                        />
                        {/* bind here or in the cunstructor */}
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
                        onClick={this.decreaseQuantity}
                        />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
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