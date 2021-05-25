import { useEffect, useRef, useState } from "react";

/**
 * Función que consume un servicio de tipo GET en base a una URL dada.
 * @param {String} url Url del servicio a consumir.
 */
export const useFetch = (url) => {
	//Creamos un state inicial
	const [state, setState] = useState({ data: {}, loading: true, error: null });
	//Verificamos que el componente que usa el hook esté montado.
	const isMounted = useRef(true);
	//Comprobamos si hay cambios en el ciclo del vida del componente
	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		// Limpiamos el state
		setState({ data: null, loading: true, error: null });
		// Realizamos la petición GET
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				//Si el componente aún está montado guardamos la
				//respuesta en el state
				if (isMounted.current) {
					setState({
						data,
						loading: false,
						error: null,
					});
				}
			})
			.catch(() => {
				//Manejamos el error
				setState({
					data: null,
					loading: false,
					error: "No se pudo realizar el fetch",
				});
			});
	}, [url]);

	return state;
};
