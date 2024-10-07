import Link from "next/link";
import ResumeCard from "../ui/resumecard";

const history = [
	{
		id: 1,
		company: "Freshbooks",
		period: "November 2019 - October 2024",
		role: "Full Stack Web Developer, Team Lead",
		description: "",
	},
	{
		id: 1,
		company: "Corus Entertainment",
		period: "October 2014 - November 2019",
		role: "Full Stack Web Developer",
		description: "",
	},
	{
		id: 1,
		company: "Critical Mass",
		period: "June 2014 - September 2014",
		role: "Web Developer",
		description: "",
	},
	{
		id: 1,
		company: "PRIOR ROLES",
		period: "",
		role: "",
		description: "Web Developer, H2 Central   →   Web Developer, Ecobee Inc.   →   Technical Director, Scott Thornley + Company   →   Web Developer, Critical Mass   →   Web Developer / Team Lead / Project Manager / Business Analyst, Vivo Mobile Telecom and TCO Mobile Telecom   →   Communications Specialist, CNPq",
	},
]
export default function Home() {
	return (
		<div>
			<main>
				<h1>Bio</h1>
				<h2>FULL STACK WEB DEVELOPER & TEAM LEAD</h2>
				<p>
					Senior standards-compliant PHP/WordPress full-stack web developer with extensive experience in front/back-end technologies and team lead 
					with 5+ years of experience in the management of teams, departments and projects. Innovative and technologically advanced leader dedicated 
					to applying the following competencies to drive excellence:
				</p>
				<div className="w-[125px] cursor-pointer mx-auto my-5 inline-block py-2 px-5 border border-slate-500 rounded-lg bg-slate-500 hover:bg-slate-300 text-white hover:text-black flex flex-row items-center">
					<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px" className="inline-block"><path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"/></svg>
					<Link href="https://www.linkedin.com/in/williambertolo/" target="_blank" className="no-underline m-0">Profile</Link>
				</div>
				<h3>DEVELOPMENT SKILLS:</h3>
				<ul>
					<li>WordPress architecture, themes and plugin development, PHP, NextJS, Gatsby, MySQL, ACF, WPML, Drupal, React, (X)HTML5, ES6, Ajax, JSON, XML, RESTful APIs, jQuery, JS unit tests, A/B testing tools</li>
					<li>CSS3, TailWind CSS, SASS, LESS, Bootstrap, media queries</li>
					<li>Mobile-first, Figma, accessibility, SEO, PSI optimization, Lighthouse, Analytics, Google Tag Manager, Google Ads, Adobe Suite, GitHub, Docker, NPM, Gulp, Grunt, SVN, browser inspectors</li>
					<li>Developed/maintained complex JS applications (financial calculators, games and home automation widgets), complex PHP applications for large-scale national audiences, several public-facing, high-visibility, mission-critical applications/sites for large-scale companies, and front-end code in .Net, C#, classic ASP and Java environments</li>
					<li>Personal musician website implemented with WordPress and TailWind CSS: https://followthislight.com</li>
				</ul>
				<h3>TEAM LEAD, PROJECT MANAGEMENT SKILLS:</h3>
				<ul>
					<li>Led teams of several sizes (8 to 50 people) in large telecom organizations. Responsibilities included resource planning, budgeting in the range of hundreds of thousands of dollars, prioritization and administrative/management tasks.</li>
					<li>Worked as Technical Director and Team Lead for digital agencies in Toronto and managed projects using waterfall methodology and worked as a team member in Scrum and Kanban Agile teams.</li>
					<li>Thrived as a Business Analyst, Information Architect, Account Manager and Web Designer for large telecom organizations.</li>
					<li>Proficient in Technical Specification writing, requirement validation and project budgeting.</li>
					<li>Coached junior/intermediate developers; highly-experienced in interacting with the creative team, product owners and external clients.</li>
					<li>Proficient in educating clients and end-users in technology principles and in providing system use training.</li>
					<li>Extremely organized, resourceful, energetic, committed, fast-paced. Superior cross-functional written and verbal communication skills.</li>
					<li>Quality-oriented and able to handle several projects simultaneously.</li>
				</ul>

				
				<h2>EMPLOYMENT HISTORY</h2>
				
				<div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr grid-flow-row">
					{history.map((card:any) => (
							<ResumeCard
								key={card.id}
								company={card.company}
								period={card.period}
								role={card.role}
								description={card.description}
							/>		
					))}
				</div>

			</main>
		</div>
	);
}
