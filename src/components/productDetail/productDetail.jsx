import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useWindowSize } from "../../hooks/useWindowSize";
import { formatCurrency, formatLanguage } from "../../helpers/format";

import "./productDetail.scss";

/**
 * Componente que genera un <div></div> que muestra toda la información
 * de un produto, para ello consime un servicio que toma como parámetro
 * el ID del producto estrito en la url.
 */
const ProductDetail = () => {
	// Tomamos de la url el id del producto que queremos mostrar.
	const { id } = useParams();
	// Este hook realiza el consumo del servicio.
	const { data, loading } = useFetch(`http://localhost:5000/api/items/${id}`);
	const history = useHistory();
	// Este hook nos permite obtener el tamaño de la pantalla, lo usarémos
	// para renderizar o no componentes
	const size = useWindowSize();

	const renderProductDetail = () => {
		const { item } = data;
		//En caso de que se introduzca un id inválido redirigímos a la ruta /notFound
		if (item == null) {
			history.replace("/notFound");
			return;
		}
		return (
			//! Se debía incluir el listado de categorías en esta vista pero debido
			//! a la forma de navegación no es posible obtener las categorías cuando
			//! se acceder a la url de esta vista directamente
			//Este div contiene toda la información del producto
			<div className='product-detail col-10'>
				{/* Esta sección solo se renderiza si el ancho es superior 
				o igual al de una tablet */}
				{size[0] >= 768 && (
					<div className='product-description col-8'>
						<div className='product-img'>
							<img src={item.picture} alt='' />
						</div>
						<div className='product-description-text'>
							<h2>Descripción del producto</h2>
							<p>{item.description}</p>
						</div>
					</div>
				)}
				<div className='product-status col-12 col-md-4'>
					<p>
						{`${formatLanguage(item.condition, "es")} - ${
							item.sold_quantity
						} vendidos`}
					</p>
					<h2>{item.title}</h2>
					{/* Esta sección solo se renderiza si el ancho es inferior 
					 al de una tablet */}
					{size[0] < 768 && (
						<div className='product-status-img col-10 mb-3'>
							<img src={item.picture} alt={item.title} />
						</div>
					)}
					<h1>{formatCurrency(item.price.amount)}</h1>
					<button>Comprar</button>
					{/* Esta sección solo se renderiza si el ancho es inferior 
					 al de una tablet */}
					{size[0] < 768 && (
						<div className='product-status-description-text'>
							<h2>Descripción del producto</h2>
							<p>{item.description}</p>
						</div>
					)}
				</div>
			</div>
		);
	};

	return (
		<div className='product-detail-container'>
			{!loading && renderProductDetail()}
		</div>
	);
};

export default ProductDetail;
