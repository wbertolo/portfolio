import Cards from './ui/cards';

export default function Home() {
	return (
		<div>
			<main>
				<h1>William Bertolo&apos;s Portfolio</h1>
				<p className="text-center mb-5">Built with NextJS and TailWind CSS</p>
				<Cards />
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				Copyright 2024, William Bertolo
			</footer>
		</div>
	);
}
