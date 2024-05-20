export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center w-full h-full min-h-screen">
			<div className="inline-block items-center text-center justify-center w-full">
				{children}
			</div>
		</section>
	);
}
