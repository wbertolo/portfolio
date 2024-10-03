import Image from 'next/image';
import Link from 'next/link';
import Cta from './cta';


export default function Card(params:any) {
	return (
		<div 
			className={`text-white basis-[32%] inline-block mb-[20px] mx-0 min-h-[184px]
			flex flex-col p-4 bg-slate-800 border border-slate-900 h-full opacity-90 hover:opacity-100
			transition-shadow duration-500 hover:shadow-2xl hover:shadow-amber-500`}
		>
			<Link href={params.href} target='_blank'>
			<div className="mb-8">
				<Image
					src={params.imgSrc}
					width={640}
					height={360}
					alt={params.imgAlt}
				/>
			</div>
			</Link>
			<div>
				<Link href={params.href} target='_blank'><h2 className="mt-0 mb-3">{params.title}</h2></Link>
				<Link href={params.href} target='_blank'><p className="mb-4 grow">{params.description}</p></Link>
				<div className="mb-4">Category: {params.category}</div>
				<Cta ctaText={params.ctaText} href={params.href} />
			</div>
		</div>
	)
}
  