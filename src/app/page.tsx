import Card from './ui/card';

export default function Home() {
	return (
		<div>
			<main>
			<h1>William Bertolo&apos;s Portfolio</h1>
			<p className="text-center mb-5">Built with NextJS and TailWind CSS</p>
				<div className="tiles flex flex-col lg:flex-row justify-between flex-wrap">
					<Card
						title="Follow This Light"
						description="A musician's personal site website"
						category="Music"
						imgSrc="/images/followthislight.jpg"
						href="https://followthislight.com/"
					/>
					<Card
						title="Freshbooks"
						description="Online Accounting Platform"
						category="SaaS"
						imgSrc="/images/freshbooks.jpg"
						href="https://freshbooks.com/"
					/>
					<Card
						title="Corus"
						description="Corus Entertainment corporate website"
						category="Media"
						imgSrc="/images/corus.jpg"
						href="https://corusent.com/"
					/>
					<Card
						title="Food Network Canada"
						description="Food Network Canada website"
						category="Media"
						imgSrc="/images/foodnetwork.jpg"
						href="https://www.foodnetwork.ca/"
					/>		
					<Card
						title="HGTV Canada"
						description="HGTV Canada website"
						category="Media"
						imgSrc="/images/hgtv.jpg"
						href="https://www.hgtv.ca/"
					/>						
					<Card
						title="Disney Channel Canada"
						description="Disney Channel Canada website"
						category="Media"
						imgSrc="/images/disney.jpg"
						href="https://www.disneychannel.ca/"
					/>
					<Card
						title="History Channel Canada"
						description="History Channel Canada website"
						category="Media"
						imgSrc="/images/history.jpg"
						href="https://www.history.ca/"
					/>		
					<Card
						title="Showcase"
						description="Showcase website"
						category="Media"
						imgSrc="/images/showcase.jpg"
						href="https://www.showcase.ca/"
					/>
					<Card
						title="YTV"
						description="YTV website"
						category="Media"
						imgSrc="/images/ytv.jpg"
						href="https://www.ytv.com/"
					/>					
					<Card
						title="Slice"
						description="Slice website"
						category="Media"
						imgSrc="/images/slice.jpg"
						href="https://www.slice.ca/"
					/>	
					<Card
						title="W Network"
						description="W Network website"
						category="Media"
						imgSrc="/images/w.jpg"
						href="https://www.wnetwork.com/"
					/>		
					<Card
						title="Tempo"
						description="Corus Entertainment custom solutions"
						category="Media"
						imgSrc="/images/tempo.jpg"
						href="https://tempo.corusent.com/"
					/>
					<Card
						title="Ecobee"
						description="Home automation"
						category="Electronics"
						imgSrc="/images/ecobee.jpg"
						href="https://www.ecobee.com/en-ca/"
					/>																																
				</div>
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				Copyright 2024, William Bertolo
			</footer>
		</div>
	);
}
