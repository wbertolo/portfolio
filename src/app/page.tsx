'use client';

import Cards from '@/app/ui/Cards';
import { useCardContext } from './context/CardContext';

export default function Home() {

	const { cards } = useCardContext();

	return (
		<main className="home">
			<h1>Work</h1>
			<Cards cards={cards} />
		</main>
	);
}
