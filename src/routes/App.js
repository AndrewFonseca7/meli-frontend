import React from "react";
import { Router, Switch, Route } from "react-router-dom";

/** Historial */
import History from "../components/History";

/** Páginas */
import Home from "../pages/home/home";
import NotFound from "../pages/notFound/notFound";

/** Componentes */
import Results from "../components/results/results";
import SearchBar from "../components/searchBar/searchBar";
import ProductDetail from "../components/productDetail/productDetail";

/**
 * Función de renderización del componente principal según la ruta
 */
const App = () => (
	<Router history={History}>
		<div className='App'>
			<SearchBar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/items/:id' component={ProductDetail} />
				<Route path='/items' component={Results} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</Router>
);

export default App;
