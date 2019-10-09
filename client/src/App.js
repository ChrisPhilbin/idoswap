import React from 'react';
import NavBar from './navbar'
import ProductSearch from './products/productSearchForm'
import NewProduct from './products/newProductForm'

//Finish below code to allow for app component to have access to a list of products
//to display upon first loading
// constructor(props) {
// 	super(props)
// 	this.state = {
// 		products: []
// 	};
// }

// componentDidMount() {
// 	fetch()
// 	.then
// 	.then
// }

function App() {
  return (
  	<div>
  		<NavBar />
	    <div class="jumbotron">
	      <h1>I Do Swap</h1>
	      <p>Helping brides and grooms buy and resell great wedding decor at great prices</p>
	    </div>

	    <div class="container">
			<ProductSearch />

			<NewProduct />
		</div>
	</div>
  );
}

export default App;
