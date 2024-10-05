'use client';
import Card from './card';
import { useState } from 'react';
// import { CardDef } from './../lib/definitions';


export default function Cards({ cards }: { cards:Array<Object> }) {

	const [cardCollection, setCardCollection] = useState(cards);
	// console.log(cardCollection);

	return (
		<div className="tiles flex flex-col lg:flex-row justify-between flex-wrap">
			{cardCollection.map((card:any) => (
					<Card
						key={card.id}
						title={card.name}
						description={card.description}
						category={card.category}
						imgSrc={`/images/${card.image}`}
						href={card.url}
					/>		
			))}
		</div>
	)
}