import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full flex fixed bottom-0 py-2 px-0 justify-center bg-[#111] text-slate-100">
			<div className="w-full flex max-w-[960px] justify-between py-1 px-3 lg:py-2 lg:px-0">
				<p class="m-0">&copy; 2024, William Bertolo</p>
				<Link 
					href="https://pagespeed.web.dev/analysis/https-william-bertolo-netlify-app/up31bcbazr?form_factor=mobile"
					target="_blank"
				>
					PSI for this page
				</Link>
			</div>
		</footer>
	);
}
