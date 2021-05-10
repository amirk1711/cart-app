import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/app';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			products: [],
			loading: true
		}

		this.db = firebase.firestore();
	}

	componentDidMount(){
		// firebase
		// 	.firestore()
		// 	.collection('products')
		// 	.get()
		// 	.then((snapshot) => {
		// 		// console.log('snapshot', snapshot.docs);

		// 		// snapshot.docs.map((doc) => {
		// 		// 	console.log('data', doc.data());
		// 		// 	return '';
		// 		// });

		// 		const products = snapshot.docs.map((doc) => {
		// 			const data = doc.data();

		// 			data['id'] = doc.id;
		// 			// because that doc has particular id

		// 			return data;
		// 		});

		// 		this.setState({
		// 			// products: products
		// 			products,
		// 			loading: false
		// 		});
		// 	})



		this.db
			.collection('products')
			.onSnapshot((snapshot) => {
				const products = snapshot.docs.map((doc) => {
					const data = doc.data();

					data['id'] = doc.id;
					// because that doc has particular id

					return data;
				});

				this.setState({
					// products: products
					products,
					loading: false
				});
			});
	}

	handleIncreaseQuantity = (product) => {
		const { products } = this.state;
		const index = products.indexOf(product);

		// products[index].qty += 1;

		// this.setState({
		// 	// products: products
		// 	// when key name and value name is same 
		// 	products
		// });

		// instead of updating qty in state
		// update it in the firebase by using reference 
		// of that particular product

		const docRef = this.db.collection('products').doc(products[index].id);
		docRef
			.update({
				qty: products[index].qty + 1
			})
			.then(() => {
				console.log('Updated successfully');
			})
			.catch((err) => {
				console.log('Error: ', err);
			});
	}

	handleDecreaseQuantity = (product) => {
		const { products } = this.state;
		const index = products.indexOf(product);
		
		if(products[index].qty === 0){
			return;
		}
		// products[index].qty -= 1;

		// this.setState({
		// 	// products: products
		// 	// when key name and balue name is same 
		// 	products
		// });

		const docRef = this.db.collection('products').doc(products[index].id);
		docRef
			.update({
				qty: products[index].qty - 1
			})
			.then(() => {
				console.log('Updated successfully');
			})
			.catch((err) => {
				console.log('Error: ', err);
			});
	}

	handleDeleteProduct = (id) => {
		const { products } = this.state;
		const items = products.filter((item) => item.id !== id);

		this.setState({
			products: items
		})
	}

	getCartCount = () => {
		const { products } = this.state;

		let count = 0;
		products.forEach((product) => {
			count += product.qty;
		})
		return count;
	}

	getCartTotal = () => {
		const { products } = this.state;

		let cartTotal = 0;
		products.forEach((product) => {
			cartTotal += product.price * product.qty;
		});
		return cartTotal;
	}

	addProduct = () => {
		this.db
			.collection('products')
			.add({
				img: '',
				price: 900,
				qty: 3,
				title: 'Washing Machine'
			})
			.then((docRef) => {
				console.log('Product has been added', docRef);
			})
			.catch((err) => {
				console.log('Error: ', err);
			})
	}

	render () {
		const { products, loading } = this.state;
		return (
			<div className="App">
				<Navbar count={this.getCartCount()}/>
				<button onClick={this.addProduct} style={{padding: 20, fontSize: 20}}>Add a product</button>
				<Cart 
					products = {products}
					onIncreaseQuantity = {this.handleIncreaseQuantity}
					onDecreaseQuantity = {this.handleDecreaseQuantity}
					onDeleteProduct = {this.handleDeleteProduct}
				/>
				{loading && <h1>Loading Products...</h1>}
				<div style={{padding: 10, fontSize: 20}}>TOTAL: {this.getCartTotal()}</div>
			</div>
		);
	}
}

export default App;