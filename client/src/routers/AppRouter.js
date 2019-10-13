import react from 'React'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar'
import AddProductPage from '../components/products/AddProductPage'
import AboutPage from '../components/AboutPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
      	<Route path="/" component={App} />
      	<Route path="/products/new" component={AddProductPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter