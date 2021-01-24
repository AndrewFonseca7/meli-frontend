import { useLayoutEffect, useState } from "react";

/**
 * Función que detecta y retorna cambios en el tamaño de la pantalla
 */
export function useWindowSize() {
	//Inicializamos el state
	const [size, setSize] = useState([0, 0]);
	//Usamos useLayoutEffect para monitorear el tamaño de la pantalla y
	// cambiar el state
	useLayoutEffect(() => {
		// Definimos la función que actualiza el state con el
		// tamaño de la pantalla
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		//Monitoreamos el tamaño de la pantalla
		window.addEventListener("resize", updateSize);
		// Actualizamos en el state el tamaño de la pantalla
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return size;
}
