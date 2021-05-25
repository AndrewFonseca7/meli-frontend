import React from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import queryString from "query-string";

import ItemCard from "../itemCard/itemCard";
import Categories from "../categories/categories";
import Constants from "../../constants/servicesConstants"

import "./results.scss";

/**
 * Componente que genera un <div></div> que muestra
 * los primeros 4 productos relacionados con la búsqueda
 * realizada.
 */
const Results = () => {
	//Este elemento nos permite acceder a la url
	const location = useLocation();
	//Este hook nos permite extraer parámetros de nuestra url.
	const { search } = queryString.parse(location.search);
	//Construimos nuestro endpoint
	const endpoint = `${Constants.HOST}${Constants.PATH.SEARCH_ITEMS}`
	// Este hook realiza el consumo del servicio.
	const { data, loading } = useFetch(`${endpoint}${search}`);

	//Esta función renderiza el arreglo de items.
	const renderResults = () => {
		const { items } = data;
		return (
			<div className='results-items col-10'>
				{items.map((item) => {
					return <ItemCard item={item} key={item.id} />;
				})}
			</div>
		);
	};

	return (
		<div className='results'>
			{/* Hacemos uso de !loading para evitar renderizar elementos 
			mientras obtenemos l arespuesta del servicio */}
			{!loading && <Categories categoriesArray={data.categories} />}
			{!loading && renderResults()}
		</div>
	);
};

export default Results;
