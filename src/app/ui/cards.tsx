'use client';
import Card from './card';
import { useState } from 'react';
import { useEffect } from "react";
import CatSelector from './catselector';
// import { CardDef } from './../lib/definitions';


export default function Cards({ cards }: { cards:Array<Object> }) {
	const [cardCollection, setCardCollection] = useState(cards);
	const [category, setCategory] = useState('All');
	let filteredCardCollection:Object[] = [];
	
	useEffect(() => {
		if (category != 'All') {
			console.log('hrere');
			console.log(cardCollection);
			cardCollection.map((card:Object) => {
				console.log('card.category=' + card.category);
				console.log('category=' + category);
				if (card.category === category) {
					console.log(card);
					filteredCardCollection.push(card);
				}
			});
			console.log(filteredCardCollection);
			setCardCollection(filteredCardCollection);
		}
      },[category]);

	return (
		<div>
			<CatSelector setCategory={setCategory} />
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
		</div>
	)
}