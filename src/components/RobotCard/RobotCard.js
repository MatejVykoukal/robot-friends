import React from 'react';
import { shortenString } from '../../utilities';

const RobotCard = ({ name, image, description }) => (
	<a
		href="https://robohash.org/"
		className="robot-card glow-on-hover capitalize"
	>
		<img
			className="robot-card__image"
			src={`${image}?size=400x400`}
			alt={`robot ${name}`}
		/>
		<h2 className="robot-card__name uppercase">{name}</h2>
		<p className="robot-card__description">{shortenString(description)}</p>
	</a>
);

export default RobotCard;
