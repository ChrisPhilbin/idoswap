import React, { Component }  from 'react';

const NewProduct = (props) => {

	let formFields = {}

	return(

		<form onSubmit={ (e) => {
			props.handleFormSubmit(formFields.name.value, formFields.description.value, formFields.price.value);
			e.target.reset();
		}}>

			<div class="form-group">
	        	<input class="form-control" ref={input => formFields.name = input} placeholder='Enter the name of the product'/>
	        </div>

	        <div class="form-group">
		        <input class="form-control" ref={input => formFields.description = input} placeholder='Enter a description' />
	        </div>

	        <div class="form-group">
				<input class="form-control" ref={input => formFields.price = input} placeholder='Enter a price' />
			</div>
	        <button>Submit</button>
      	</form>
	)
}

export default NewProduct