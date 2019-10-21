import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getProducts } from '../actions/productActions'
import { getCategories } from '../actions/categoryActions'
import IntroHeader from './IntroHeader'
import ProductSearch from './products/ProductSearchForm'
import ProductList from './products/ProductList'

class MainPage extends Component {

	componentDidMount() {
		this.props.getProducts()
		this.props.getCategories()
	}

  render() {
  	console.log(3)
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
						<br />
						<h4>Recently Added Items...</h4>
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
