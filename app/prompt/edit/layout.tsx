export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
			<div className="w-full inline-block text-center justify-center min-h-screen mt-6">
				{children}
			</div>
	);
}
