import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";
import History from "../History";
import Logo1x from "../../assets/img/Logo_ML.png";
import Logo2x from "../../assets/img/Logo_ML@2x.png";
import SearchIcon1x from "../../assets/img/ic_Search.png";
import SearchIcon2x from "../../assets/img/ic_Search@2x.png";
import "./searchBar.scss";

/**
 * Componente que genera un <div></div> que contiene el logo
 * de Mercado Libre y la barra de búsqueda de productos.
 */
const SearchBar = () => {
	//Definimos una variable en la cuál almacenar el valor del input.
	const [input, setInput] = useState("");
	//Creamos un objeto que nos permita acceder a la url.
	const location = useLocation();
	//Extraemos de la url el query y lo almacenamos.
	const { search } = queryString.parse(location.search);

	/**
	 * Función que se encarga de manejar el evento submit
	 * @param {event} e evento de submit
	 */
	const submitAction = (e) => {
		//Evitamos que la página se recargue
		e.preventDefault();
		//Evitamos que el usuario haga busquedas con palabras
		//de longitud inferior a 2 caracteres
		if (input.trim().length <= 1) {
			return;
		}
		//Evitamos que el usuario envíe consultene nuevamente
		//la información de un producto que ya está viendo
		if (search === input) {
			return;
		}
		//Añadimos el queryString a la url y cargamos esa ruta
		History.push("/items?search=" + input);
	};

	return (
		<div className='search-bar md-col-12 d-flex justify-content-center bg-brand-yellow py-1'>
			<div className='search-bar-logo col-1'>
				{/* Usamos el atributo srcSet cargar imágenes dependiendo
					de la resolución de la pantalla */}
				<Link to='/'>
					<img
						src={Logo1x}
						srcSet={Logo1x + " 1x," + Logo2x + " 2x"}
						alt='LogoML'
					/>
				</Link>
			</div>
			<form onSubmit={submitAction} className='search-bar-form col-9'>
				<input
					type='text'
					placeholder='Nunca dejes de buscar'
					value={input}
					className='search-bar-input'
					onChange={(e) => setInput(e.target.value)}
				/>
				<button type='submit' className='search-bar-button'>
					{/* Usamos el atributo srcSet cargar imágenes dependiendo
					de la resolución de la pantalla */}
					<img
						src={SearchIcon1x}
						srcSet={SearchIcon1x + " 1x," + SearchIcon2x + " 2x"}
						alt='Search Icon'
					/>
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
