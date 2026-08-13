'use client';
import { useState } from 'react';

export default function Counter() {
	const [n, setN] = useState(0);
	return (
		<button
			onClick={() => setN(n + 1)}
			className='text-base py-2 px-4 rounded-lg border-0 bg-blue-400 text-gray-900 font-semibold cursor-pointer'
		>
			Clicked {n} times
		</button>
	);
}
