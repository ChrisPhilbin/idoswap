import React from 'react';
import NavBar from './navbar'
import ProductSearch from './products/productSearchForm'

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
		</div>
	</div>
  );
}

export default App;
