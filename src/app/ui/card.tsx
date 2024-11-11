import Image from 'next/image';
import { useState } from 'react';
import { useCardContext } from '../context/CardContext';

export default function Card(params:any) {

	// const { cards } = useCardContext();
	const [openState, setOpenState] = useState(false);

	const handleClick = () => {
		const cards = document.querySelectorAll('.card');

		cards.forEach((card) => {
			card.classList.remove('open');
			card.classList.add('closed');
		});

		setOpenState(!openState);

		document.getElementById(`card-${params.id}`)?.classList.add('open')
		document.getElementById(`card-${params.id}`)?.scrollIntoView(
			{ 
				block:"center"
			}
		);
	}

	return (
		<>
			<style jsx>{`
				.card {
					transition: flex-basis 0.75s ease;
				}
				.open {
					flex-basis: 64%;

					.description {
						display: block;
					}
				}

				.closed {
					flex-basis: 31%;

					.description {
						display: none;
					}
				}
			`}</style>
			<div 
				id={`card-${params.id}`}
				className={`card ${openState ? 'open' : 'closed'} text-white inline-block mb-[20px] mx-2 min-h-[184px] 
				flex flex-col justify-between p-4 bg-slate-800 border border-slate-900 h-full opacity-90 hover:opacity-100
				transition-shadow duration-500 hover:shadow-2xl hover:shadow-purple-500`}
				onClick={handleClick}
			>
				<Image
					src={params.imgSrc}
					width={294}
					height={165}
					alt={`${params.name} website image`}
					className="mb-5"
				/>
				<div>
					<h2 className="mt-0 mb-3 text-white">{params.name}</h2>
					<div className="description mb-4">{params.description}</div>
					<div className="mb-4">Category: {params.category}</div>
					<div 
						className={`inline-block py-3 px-4 uppercase font-bold border bg-slate-900 
							text-white no-underline hover:bg-white hover:text-black hover:border-black`}
					>
						Visit
					</div>
				</div>
			</div>
		</>
	)
}
  