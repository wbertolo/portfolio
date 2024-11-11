'use client';
import Card from './Card';
import { useState } from 'react';
import { useEffect } from "react";
import CatSelector from './CatSelector';
import { Card as CardDef } from '../lib/definitions';

export default function Cards({ cards }: { cards:Array<CardDef> }) {
	const cardCollection = cards;
	const [filteredCardCollection, setFilteredCardCollection] = useState(cards);
	const [category, setCategory] = useState('All');

	useEffect(() => {
		// const filteredCards:object[] = [];
		if (category != 'All') {
			const filteredCards = [];
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
			<div className="cards flex row flex-wrap items-start">
				{filteredCardCollection.map((card:any) => (
						<Card
							key={card.id}
							id={card.id}
							name={card.name}
							description={card.description}
							category={card.category}
							imgSrc={`/images/${card.image}`}
							href={card.url}
							// handleSelectedCard={handleSelectedCard}
							// setModalStatus={setModalStatus}
						/>		
				))}
			</div>
		</div>
	)
}