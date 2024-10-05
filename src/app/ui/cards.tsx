'use client';
import Card from './card';
import { useState } from 'react';
import CatSelector from './catselector';
// import { CardDef } from './../lib/definitions';


export default function Cards({ cards }: { cards:Array<Object> }) {

	const [cardCollection, setCardCollection] = useState(cards);
	const [category, setCategory] = useState('all');

	function handleCategoryChange(newCategory:string) {
		setCategory(newCategory);
		console.log(newCategory);
	 }

	// console.log(cardCollection);

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