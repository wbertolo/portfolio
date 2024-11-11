import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Card(params:any) {

	const [openState, setOpenState] = useState(false);

	const handleClick = () => {

		setOpenState(!openState);


		setTimeout(
			function() {

				if (!openState) {

					document.querySelector(`#card-${params.id}`)?.classList.remove('closed');
					document.querySelector(`#card-${params.id}`)?.classList.add('open');

					setTimeout(
						function() {
							if (!openState) {

								document.getElementById(`card-${params.id}`)?.scrollIntoView(
									{ 
										block:"center",
										inline: "center",
										behavior: "smooth"
									}
								);

								setTimeout(
									function() {
										document.querySelector(`#card-${params.id} .description`)?.classList.remove('desc-closed');
										document.querySelector(`#card-${params.id} .description`)?.classList.add('desc-open');
									},
									500
								);

							}
						}, 
						500
					);


				} else {
					document.querySelector(`#card-${params.id} .description`)?.classList.remove('desc-open');
					document.querySelector(`#card-${params.id} .description`)?.classList.add('desc-closed');

					setTimeout(
						function() {
							document.querySelector(`#card-${params.id}`)?.classList.remove('open');
							document.querySelector(`#card-${params.id}`)?.classList.add('closed');
						}, 
						500
					);

				}


			}, 
			300
		);
	}

	return (
		<>
			<style jsx>{`
				.card {
					transition: flex-basis 0.75s ease;
				}
				.open {

					flex-basis: 100%;

					@media only screen and (min-width: 768px) {
						flex-basis: 64%;
					}
				

					.description {
						transition: all 0.3s ease;
					}
				}

				.closed {
					flex-basis: 100%;

					@media only screen and (min-width: 768px) {
						flex-basis: 31%;
					}
				}

				.desc-closed {
					max-height: 0;
				}

				.desc-open {
					max-height: 500px;
				}
			`}</style>
			<div 
				id={`card-${params.id}`}
				className={`card closed cursor-pointer text-white inline-block mb-[20px] mx-2 min-h-[184px] 
				flex flex-col justify-between p-4 bg-slate-800 border border-slate-900 h-full opacity-90 hover:opacity-100
				transition-all duration-1000 ease hover:shadow-2xl hover:shadow-purple-500`}
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
					<div id="description" className="description desc-closed mb-4 transition-all ease duration-200 overflow-hidden">
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
					<div className="mb-4">Category: {params.category}</div>
				</div>
			</div>
		</>
	)
}
  