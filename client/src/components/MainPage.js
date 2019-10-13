import React, { Component } from 'react';
import { connect } from 'react-redux'
import NavBar from './NavBar'
import { getProducts } from '../actions/productActions'
import { getCategories } from '../actions/categoryActions'
import IntroHeader from './IntroHeader'
import ProductSearch from './products/ProductSearchForm'
import ProductList from './products/ProductList'
import CategoryList from './categories/CategoryList'
class MainPage extends Component {

	componentDidMount() {
		this.props.getProducts()
		this.props.getCategories()
	}

  render() {
	  return (
	  	<div>
	  		<div class="container">
	  			<IntroHeader />
	  		</div>
		    <div class="container">
		    	<div class="row">
					<ProductSearch />
				</div>

				<div class="container">
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

export default connect(mapStateToProps, { getProducts, getCategories })(MainPage);
