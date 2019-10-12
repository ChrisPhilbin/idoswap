import React, { Component } from 'react';
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import { getProducts } from './actions/productActions'
import ProductSearch from './components/products/ProductSearchForm'
import ProductList from './components/products/ProductList'
class App extends Component {

	componentDidMount() {
		this.props.getProducts()
	}

  render() {
	  return (
	  	<div>
	  		<NavBar />
		    <div class="jumbotron">
		      <h1>I Do Swap</h1>
		      <p>Helping brides and grooms buy and resell great wedding decor at great prices</p>
		    </div>

		    <div class="container">
		    	<div class="row">
					<ProductSearch />
				</div>

				<div class="container">
					<div class="row">
						<h3><b>Most recent products...</b></h3>
					</div>

					<div class="row">
						<ProductList />
					</div>
				</div>
			</div>
		</div>
	  );
  };

}

// export default App

const mapStateToProps = (state) => {
	//console.log(state)
  	return ({
  		products: state.productsReducer.products,
  		loading: state.productsReducer.loading
  	})
}


export default connect(mapStateToProps, { getProducts })(App);
