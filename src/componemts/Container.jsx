/* eslint-disable react/prop-types */
function Container({ children, place }) {
	return (
		<div
			className={`w-11/12 mx-auto xl:w-9/12 mdxl:w-10/12 ${
				place === 'nav' ? 'w-10/12 py-5' : ''
			} ${place === 'cta' && 'bg-blue-700 w-full mdxl:w-full xl:w-full'} ${
				place === 'footer' && 'bg-slate-950 w-full xl:w-full mdxl:w-full'
			}`}
		>
			{children}
		</div>
	);
}

export default Container;
