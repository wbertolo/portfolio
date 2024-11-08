import Image from 'next/image';
import { Card } from '../lib/definitions';

type CardOverlayProps = {
	modalStatus: boolean,
	setModalStatus: (status: boolean) => void; // Define setModalStatus type explicitly
	selectedCard: Card;
};


export default function CardOverlay({modalStatus, setModalStatus, selectedCard} : CardOverlayProps) {

	return (
		<>
			<div className={`overlay-shadow ${modalStatus ? 'absolute' : 'hidden'} top-0 left-0 scale-[10] opacity-70 bg-black z-10`}></div>
			<div className={`overlay ${modalStatus ? 'absolute' : 'hidden'} scale-110 inset-x-0 top-0 bg-slate-600 border-4 border-white z-20`}>

				<button
					className="absolute top-2 right-2 text-gray-800 hover:text-gray-900 text-2xl font-bold"
					aria-label="Close"
					onClick={() => setModalStatus(false)}
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

				<Image
					src={`/images/${selectedCard.image}`}
					width={294}
					height={165}
					alt={`${selectedCard.name} website image`}
					className="w-full h-auto"
				/>
			</div>
		</>
	)
}
  