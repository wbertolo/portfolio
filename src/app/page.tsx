'use client';

import Cards from './ui/Cards';
import { useCardContext } from './context/CardContext';

export default function Home() {

	const { cards } = useCardContext();

	return (
		<div>
			<main>
				<h1>Work</h1>
				<Cards cards={cards} />
			</main>
		</div>
	);
}
