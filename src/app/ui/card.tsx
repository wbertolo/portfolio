import Image from 'next/image';
import Link from 'next/link';

export default function Card(params:any) {

	const handleClick = () => {
		params.handleSelectedCard(params.id);
		params.setModalStatus(true);
	}
	return (
		// <Link href={params.href} target="_blank" className="no-underline">
			<div 
				className={`card text-white basis-[32%] inline-block mb-[20px] mx-auto min-h-[184px] max-w-[328px]
				flex flex-col justify-between p-4 bg-slate-800 border border-slate-900 h-full opacity-90 hover:opacity-100
				transition-shadow duration-500 hover:shadow-2xl hover:shadow-purple-500`}
				onClick={handleClick}
			>
				<Image
					src={params.imgSrc}
					width={294}
					height={165}
					alt={`${params.name} website image`}
				/>
				<div>
					<h2 className="mt-0 mb-3 text-white">{params.name}</h2>
					<p className="mb-4 grow">{params.description}</p>
					<div className="mb-4">Category: {params.category}</div>
					<div 
						className={`inline-block py-3 px-4 uppercase font-bold border bg-slate-900 
							text-white no-underline hover:bg-white hover:text-black hover:border-black`}
					>
						Visit
					</div>
				</div>
			</div>
		// </Link>
	)
}
  