import styles from '@/app/ui/home.module.css';
import Image from 'next/image';
import Card from './ui/card';
import invoices from './lib/placeholder-data.ts';

export default function Home() {
	return (
		<div>
			<main className="">
			<h1>William Bertolo's Portfolio</h1>
				<div className="tiles flex flex-col lg:flex-row justify-between flex-wrap">
					<Card
						title="Follow This Light"
						description="A musician's personal site website"
						imgSrc="/images/followthislight.jpg"
						href="https://followthislight.com/"
					/>
					<Card
						title="Freshbooks"
						description="Online Accounting Platform"
						imgSrc="/images/freshbooks.jpg"
						href="https://freshbooks.com/"
					/>
					<Card
						title="Corus"
						description="Corus Entertainment corporate website"
						imgSrc="/images/corus.jpg"
						href="https://corusent.com/"
					/>
					<Card
						title="Tempo"
						description="Corus Entertainment custom solutions"
						imgSrc="/images/tempo.jpg"
						href="https://tempo.corusent.com/"
					/>
					<Card
						title="Disney Channel Canada"
						description="Disney Channel Canada website"
						imgSrc="/images/disney.jpg"
						href="https://www.disneychannel.ca/"
					/>
					<Card
						title="History Channel Canada"
						description="History Channel Canada website"
						imgSrc="/images/history.jpg"
						href="https://www.history.ca/"
					/>		
					<Card
						title="Showcase"
						description="Showcase website"
						imgSrc="/images/showcase.jpg"
						href="https://www.showcase.ca/"
					/>	
					<Card
						title="Food Network Canada"
						description="Food Network Canada website"
						imgSrc="/images/foodnetwork.jpg"
						href="https://www.foodnetwork.ca/"
					/>		
					<Card
						title="HGTV Canada"
						description="HGTV Canada website"
						imgSrc="/images/hgtv.jpg"
						href="https://www.hgtv.ca/"
					/>	
					<Card
						title="Slice"
						description="Slice website"
						imgSrc="/images/slice.jpg"
						href="https://www.slice.ca/"
					/>	
					<Card
						title="W Network"
						description="W Network website"
						imgSrc="/images/w.jpg"
						href="https://www.wnetwork.com/"
					/>		
					<Card
						title="YTV"
						description="YTV website"
						imgSrc="/images/ytv.jpg"
						href="https://www.ytv.com/"
					/>
					<Card
						title="Ecobee"
						description="Home automation"
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
