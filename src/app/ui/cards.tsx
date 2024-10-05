'use client';
import Card from './card';
import { useState } from 'react';
import { useEffect } from "react";
import CatSelector from './catselector';
// import { CardDef } from './../lib/definitions';


export default function Cards({ cards }: { cards:Array<Object> }) {

	const [cardCollection, setCardCollection] = useState(cards);
	const [category, setCategory] = useState('All');

	function handleCategoryChange(newCategory:string) {
		if (newCategory != 'All') {
			setCategory(newCategory);
			const filteredCardCollection = cardCollection.filter(card => card.category === category);
			console.log(filteredCardCollection);
			// updateCards(category, filteredCardCollection)
		}
	}
	
	function updateCards(category:string, filteredCardCollection:Object[]) {
		setCardCollection(filteredCardCollection);
	}
	// useEffect(() => {
	// 	setCardCollection(cardCollection.filter(card => card.category === category));
	// });



	return (
		<div>
			<CatSelector handleCategoryChange={handleCategoryChange} />
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