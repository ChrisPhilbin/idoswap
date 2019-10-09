import React, { Component }  from 'react';
import NewProductClient from './newProductClient'

const NewProduct = (props) => {

	let formFields = {}

	return(

		<form onSubmit={ (e) => {
			e.preventDefault();
			props.handleFormSubmit(formFields.name.value, formFields.description.value, formFields.price.value,
				formFields.user_id.value);
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

			<div class="form-group">
	        	<input class="form-control" ref={input => formFields.user_id = input} placeholder='Enter user id'/>
	        </div>

	        <button class="btn btn-primary">Submit</button>
      	</form>
	)
}

export default NewProduct