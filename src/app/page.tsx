'use client';

import Cards from './ui/Cards';
import { useCardContext } from './context/CardContext';
import CardOverlay from '@/app/ui/CardOverlay';

export default function Home() {

	const { cards } = useCardContext();

	return (
		<main className="home">
			<h1>Work</h1>
			<Cards cards={cards} />
			<CardOverlay />
		</main>
	);
}
