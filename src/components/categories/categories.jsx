import React from "react";
import { Link } from "react-router-dom";
import "./categories.scss";

/**
 * Componente que genera en elemento <p></p> que contiene las categorías
 * relacionadas con la búsqueda.
 * @param {[String]} param0 Arreglo de categorías relacionadas con la búsqueda.
 */
const Categories = ({ categoriesArray }) => {
	const categories =
		categoriesArray.length > 4 ? categoriesArray.slice(0, 4) : categoriesArray;
	return (
		<p className='results-categories col-10'>
			{categories.map((category, index) => {
				return (
					// Recorremos el arreglo de categorías y generamos un link
					// por cada una de las categorías
					<span key={category}>
						<Link to={`/items?search=${category}`}>{category}</Link>
						{index !== categories.length - 1 && <span> &gt; </span>}
					</span>
				);
			})}
		</p>
	);
};

export default Categories;
