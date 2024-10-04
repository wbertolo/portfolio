import Link from 'next/link';

export default function Cta(params:any) {

	return (
		<Link 
			href={params.href ? params.href : ''}
            target='_blank'
			className={`inline-block py-3 px-4 uppercase font-bold border bg-slate-900 
				text-white no-underline hover:bg-white hover:text-black hover:border-black`}
		>
			Learn More
		</Link>
	)
}
