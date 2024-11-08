'use client';

import Cards from './ui/Cards';


const cards = [
	{
		id: 1,
		name: "Follow This Light",
		description: "This Light's musician website",
		category: "Music",
		image: "followthislight.jpg",
		url: "https://followthislight.com/",
	},
	{
		id: 2,
		name: "Freshbooks",
		description: "Online Accounting Platform",
		category: "SaaS",
		image: "freshbooks.jpg",
		url: "https://www.freshbooks.com/",
	},
	{
		id: 3,
		name: "Corus",
		description: "Corus Entertainment corporate website",
		category: "Media",
		image: "corus.jpg",
		url: "https://corusent.com/",
	},
	{
		id: 4,
		name: "Food Network Canada",
		description: "Food Network Canada website",
		category: "Media",
		image: "foodnetwork.jpg",
		url: "https://www.foodnetwork.ca/",
	},
	{
		id: 5,
		name: "HGTV Canada",
		description: "HGTV Canada website",
		category: "Media",
		image: "hgtv.jpg",
		url: "https://www.hgtv.ca/",
	},
	{
		id: 6,
		name: "Disney Channel Canada",
		description: "Disney Channel Canada website",
		category: "Media",
		image: "disney.jpg",
		url: "https://www.disneychannel.ca/",
	},
	{
		id: 7,
		name: "History Channel Canada",
		description: "History Channel Canada website",
		category: "Media",
		image: "history.jpg",
		url: "https://www.history.ca/",
	},
	{
		id: 8,
		name: "Showcase",
		description: "Showcase website",
		category: "Media",
		image: "showcase.jpg",
		url: "https://www.showcase.ca/",
	},
	{
		id: 9,
		name: "YTV",
		description: "YTV website",
		category: "Media",
		image: "ytv.jpg",
		url: "https://www.ytv.com/",
	},		
	{
		id: 10,
		name: "Slice",
		description: "Slice website",
		category: "Media",
		image: "slice.jpg",
		url: "https://www.slice.ca/",
	},
	{
		id: 11,
		name: "W Network",
		description: "W Network website",
		category: "Media",
		image: "w.jpg",
		url: "https://www.wnetwork.com/",
	},
	{
		id: 12,
		name: "Tempo",
		description: "Corus Entertainment custom solutions",
		category: "Media",
		image: "tempo.jpg",
		url: "https://tempo.corusent.com/",
	},		
	{
		id: 13,
		name: "Ecobee",
		description: "Home automation",
		category: "Electronics",
		image: "ecobee.jpg",
		url: "https://www.ecobee.com/en-ca/",
	}			
];


export default function Home() {

	return (
		<div>
			<main>
				<h1>Work</h1>
				<Cards cards={cards} />
			</main>
		</div>
	);
}
