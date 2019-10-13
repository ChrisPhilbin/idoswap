import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getProducts } from '../actions/productActions'
import { getCategories } from '../actions/categoryActions'
import IntroHeader from './IntroHeader'
import ProductSearch from './products/ProductSearchForm'
import ProductList from './products/ProductList'
// import CategoryList from './categories/CategoryList'
class MainPage extends Component {

	componentDidMount() {
		this.props.getProducts()
		this.props.getCategories()
	}

  render() {
	  return (
	  	<div>
	  		<div className="container">
	  			<IntroHeader />
	  		</div>
		    <div className="container">
		    	<div className="row">
					<ProductSearch />
				</div>

				<div className="container">
					<div className="row">
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
