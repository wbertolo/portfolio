import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Card(params:any) {

	const [openState, setOpenState] = useState(false);

	const handleClick = () => {
		setOpenState(!openState);
	}

	return (
		<>
			<div 
				id={`card-${params.id}`}
				className={`card cursor-pointer text-white inline-block mb-[20px] mx-2 min-h-[184px] 
				flex flex-col justify-between basis-full md:basis-[31%] p-4 bg-slate-800 border border-slate-900 h-full 
				opacity-90 hover:opacity-100 transition-all duration-75 ease hover:shadow-2xl hover:shadow-purple-500`}
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
					<div id="description" className={`description ${openState ? 'max-h-[500px]' : 'max-h-0'} mb-4 transition-all ease duration-200 overflow-hidden`}>
						<p>{params.description}</p>

						<Link 
							href={params.url}
							target="_blank"
							className={`inline-block py-3 px-4 uppercase font-bold border bg-slate-900
								text-white no-underline hover:bg-white hover:text-black hover:border-black`}
						>
							Visit
						</Link>

					</div>
					<div className="mb-4">{openState}Category: {params.category}</div>
				</div>
			</div>
		</>
	)
}
  