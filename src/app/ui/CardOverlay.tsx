import Image from 'next/image';
import { useCardContext } from "@/app/context/CardContext";

export default function CardOverlay() {
	
	const { modalStatus, setModalStatus, selectedCard } = useCardContext();
	let image, name, description, category;

	if (selectedCard) {
		image = selectedCard?.image;
		name = selectedCard?.name;
		description = selectedCard?.description;
		category = selectedCard?.category;
	}
	
	const handleClick = () => {
		setModalStatus(false);
		// document.getElementById('overlay-shadow')?.classList.remove('fixed');
		// document.getElementById('overlay-shadow')?.classList.add('hidden');
		// document.body.classList.remove('overlay-shadow-colour');
	}

	return (
		<>
			{/* <div id="overlay-shadow" className="overlay-shadow overlay-shadow-colour ${modalStatus ? 'fixed' : 'hidden'} inset-0 w-full h-full opacity-70 bg-black z-10"></div> */}
			<div id="overlay" className={`overlay ${modalStatus ? 'fixed' : 'hidden'} w-[728px] h-[440px] top-1/2 left-1/2 bg-slate-600 border-4 border-white z-20`}>

				<button
					className="absolute top-2 right-2 text-gray-800 hover:text-gray-900 text-2xl font-bold"
					aria-label="Close"
					onClick={handleClick}
					>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>

				<div className="p-8 text-white">
					<Image
						src={`/images/${image}`}
						width={294}
						height={165}
						alt={`${name} website image`}
						className="mb-5"
					/>
					<h2 className="mt-0 mb-3 text-white">{name}</h2>
					<p className="mb-4 grow">{description}</p>
					<div className="mb-4">Category: {category}</div>
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
  