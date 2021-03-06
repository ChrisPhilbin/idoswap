import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar'
import MainPage from '../components/MainPage'
import AddProductPage from '../components/products/AddProductPage'
import CategoryListPage from '../components/categories/CategoryListPage'
import AboutPage from '../components/AboutPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={MainPage} />
      	<Route path="/categories" component={CategoryListPage} />
		    <Route path="/products/new" component={AddProductPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter