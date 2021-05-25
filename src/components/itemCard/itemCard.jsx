import React from "react";
import { Link } from "react-router-dom";
import ShippingIcon from "../../assets/img/ic_shipping.png";
import { formatCurrency } from "../../helpers/format";
import "./itemCard.scss";

/**
 * Componente que genera un <div></div> que muestra la información de un ítem.
 * @param {Item} param0 Objeto que contiene propiedades de un ítem
 * como su id, nombre, imagen, precio y título.
 */
const ItemCard = ({ item }) => {
	return (
		<div className='item-card col-12'>
			<div className='item-image'>
				<Link to={`/items/${item.id}`}>
					<img src={item.picture} alt={item.name} />
				</Link>
			</div>
			<div className='item-info'>
				<div>
					<div>
						<h1 className='item-price'>
							{formatCurrency(item.price.amount)}
							<span>
								{item.free_shipping && (
									<img src={ShippingIcon} alt='free-shipping-icon' />
								)}
							</span>
						</h1>
					</div>
					<h3 className='item-city col-2 d-none d-md-block'>{item.state_name}</h3>
				</div>
				<h2 className='item-title col-11 col-sm-5 p-0 mt-4'>
					<Link to={`/items/${item.id}`}>{item.title}</Link>
				</h2>
			</div>
		</div>
	);
};

export default ItemCard;
