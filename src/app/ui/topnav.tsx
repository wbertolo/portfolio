'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
 
// ...
 
export default function TopNav() {
  const pathname = usePathname();
 
  const links = [
	{ name: 'Work', href: '/'},
	{ name: 'Bio', href: '/bio'},
];

  return (
	<>
		<div className="flex flex-row justify-center">
			{links.map((link) => {
				return (
				<Link
					key={link.name}
					href={link.href}
					className={clsx(
					'inline-block no-underline mx-4 py-1 text-center font-bold text-md md:text-lg lg:text-2xl',
					{
						'border-b-4 border-purple-medium-2': pathname === link.href,
					},
					)}
				>
					{link.name}
				</Link>
				);
			})}
		</div>
	</>
  );
}