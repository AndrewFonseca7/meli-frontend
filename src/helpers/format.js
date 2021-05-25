/**
 * Función que devuelve un número formateado como valor monetario.
 * @param {Number} value
 */
export const formatCurrency = (value) => {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
	});

	return formatter.format(value).replace("$", "$ ");
};

/**
 * Función que traduce un texto en base al idioma dado.
 * @param {String} text Texto que se desea reemplazar.
 * @param {Strin} language Idioma al que se desea convertir el texto.
 */
export const formatLanguage = (text, language) => {
	switch (language) {
		case "es":
			if (text === "new") {
				return "Nuevo";
			}
			if (text === "used") {
				return "Usado";
			}
			break;
		default:
			return text;
	}
};
