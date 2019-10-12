import React, { Component } from 'react';
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import { getProducts } from './actions/productActions'
import { getCategories } from './actions/categoryActions'
import ProductSearch from './components/products/ProductSearchForm'
import ProductList from './components/products/ProductList'
import CategoryList from './components/categories/CategoryList'
class App extends Component {

	componentDidMount() {
		this.props.getProducts()
		this.props.getCategories()
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
						<CategoryList />
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

const mapStateToProps = (state) => {
  	return state
}

export default connect(mapStateToProps, { getProducts, getCategories })(App);
