export default function ResumeCard(params:any) {
	return (
		<div 
			className={`card w-full text-white basis-[32%] inline-block mb-[20px] mx-auto
			flex flex-col justify-between p-4 bg-slate-800 border border-slate-900 h-full opacity-90 hover:opacity-100
			transition-shadow duration-500 hover:shadow-2xl hover:shadow-purple-500`}
		>
			<div>
				<h2 className="mt-0 mb-3 text-white">{params.company}</h2>
				<p className="mb-4 grow">{params.period}</p>
				<div className="mb-4">{params.role}</div>
				<div className="mb-4">Tecnologies: {params.technologies}</div>
				<div>{params.description}</div>
			</div>
		</div>
	)
}
  