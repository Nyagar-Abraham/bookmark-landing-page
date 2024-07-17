/* eslint-disable react/prop-types */
function Heading({ children, type }) {
	if (type === 'tertiary')
		return (
			<h3 className="font-semibold mb-2  text-slate-950/90  text-xl capitalize ">
				{children}
			</h3>
		);

	if (type === 'secondary')
		return (
			<h2 className="font-semibold mb-3 text-slate-950/90 text-2xl capitalize ">
				{children}
			</h2>
		);

	return (
		<h1 className="font-semibold mb-6  text-3xl capitalize ">{children}</h1>
	);
}

export default Heading;
