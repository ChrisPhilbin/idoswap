import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

const NavBar = () => (
  <header>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	  <a class="navbar-brand" href="#">I Do Swap</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarNav">
	    <ul class="navbar-nav">
	      <li class="nav-item active">
	        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="#">Sell a product</a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="#">Browse Categories</a>
	      </li>
	      <li class="nav-item">
	      	<NavLink to="/about" activeClassName="is-active" class="nav-link">About</NavLink>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link disabled" href="#">Login</a>
	      </li>
	    </ul>
	  </div>
	</nav>
  </header>
)

export default NavBar