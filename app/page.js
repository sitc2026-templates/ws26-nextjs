import { version as reactVersion } from 'react';
import Counter from './Counter';

export default function Home() {
	return (
		<main className='bg-[#151c33] p-10 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,.4)]'>
			<h1>
				Next.js <span className='text-[#7c9cff]'>16.1.6</span>
			</h1>
			<p>WSC2026 Web Technologies — minimal Next.js app (App Router, React {reactVersion}).</p>
			<Counter />
		</main>
	);
}
