import './globals.css';

export const metadata = { title: 'WSC2026 · Next.js 16.1.6' };

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='font-sans m-0 min-h-screen grid place-items-center bg-[#0b1020] text-[#e7ecff]'>
				{children}
			</body>
		</html>
	);
}
