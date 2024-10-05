'use client';
import Card from './card';
import { useState } from 'react';
import { useEffect } from "react";
import CatSelector from './catselector';
// import { CardDef } from './../lib/definitions';


export default function Cards({ cards }: { cards:Array<object> }) {
	const cardCollection = cards;
	const [filteredCardCollection, setFilteredCardCollection] = useState(cards);
	const [category, setCategory] = useState('All');

	useEffect(() => {
		const filteredCards:object[] = [];
		if (category != 'All') {
			cardCollection.map((card:any) => {
				if (card.category === category) {
					filteredCards.push(card);
				}
			});
			setFilteredCardCollection(filteredCards);
		} else {
			setFilteredCardCollection(cardCollection); 
		}
      },[category, cardCollection]);

	return (
		<div>
			<CatSelector setCategory={setCategory} />
			<div className="tiles flex flex-col lg:flex-row justify-between flex-wrap">
				{filteredCardCollection.map((card:any) => (
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
		</div>
	)
}