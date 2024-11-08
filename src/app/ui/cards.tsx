'use client';
import Card from './Card';
import { useState } from 'react';
import { useEffect } from "react";
import CatSelector from './CatSelector';
import CardOverlay from './CardOverlay';
import { Card as CardDef } from '../lib/definitions';

export default function Cards({ cards }: { cards:Array<CardDef> }) {
	const cardCollection = cards;
	const [filteredCardCollection, setFilteredCardCollection] = useState(cards);
	const [category, setCategory] = useState('All');
	const [selectedCard, setSelectedCard] = useState({});
	const [modalStatus, setModalStatus ] = useState(false);

	useEffect(() => {
		console.log(modalStatus)
	},[modalStatus])


	const handleSelectedCard = (id:number) => {
		const targetCard = cardCollection.filter(card => card.id === id)[0];
		setSelectedCard(targetCard);

	}


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
			<div className="cards grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr grid-flow-row">
				{filteredCardCollection.map((card:any) => (
						<Card
							key={card.id}
							id={card.id}
							name={card.name}
							description={card.description}
							category={card.category}
							imgSrc={`/images/${card.image}`}
							href={card.url}
							handleSelectedCard={handleSelectedCard}
							setModalStatus={setModalStatus}
						/>		
				))}
			</div>
			<CardOverlay
				modalStatus={modalStatus}
				setModalStatus={setModalStatus}
				selectedCard={selectedCard}
			/>
		</div>
	)
}