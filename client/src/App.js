import React, { Component } from 'react';
import { connect } from 'react-redux'
import NavBar from './navbar'
import getProducts from './products/getProducts'
import ProductSearch from './products/productSearchForm'

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
				<ProductSearch />
			</div>
		</div>
	  );
  }

  const mapStateToProps = (state) => {
  	return ({
  		products: state.products,
  		loading: state.loading
  	})
  }
}

export default connect(mapStateToProps, getProducts)(App);
