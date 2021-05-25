/**
 * Este archivo almacena como constantes el host
 * y los paths necesarios para consumir los servicios
 * de Mercado Libre.
 */
 module.exports = {
	HOST: "http://localhost:8080",
	PATH: {
		SEARCH_ITEMS: "/api/items?q=",
		GET_ITEM_DETAIL: "/api/items/"
	},
};
