import Image from 'next/image';
// import Link from 'next/link';


export default function CardOverlay(params:any) {
	return (
		<div className="overlay absolute top-0 inset-x-0 bg-slate-600 border-4 border-white z-10">
			<Image
				src={params.imgSrc}
				width={294}
				height={165}
				alt={`${params.title} website image`}
				className="w-full h-auto"
			/>
		</div>
	)
}
  