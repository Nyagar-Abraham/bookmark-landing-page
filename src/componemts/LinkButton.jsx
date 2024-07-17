/* eslint-disable react/prop-types */
function LinkButton({ to, children, type, place, nav,onClick }) {
	const base = `
  px-3 border-1 py-1 rounded-md active:ring-2 hover:ring-2 font-semibold ${
		place === 'head' || type === 'footer'
			? 'uppercase text-xs hover:!ring-transparent  tracking-wide  focus:!ring-transparent'
			: ''
	}  ${
		place === 'head' &&
		type === 'login' &&
		'hover:!ring-red-500 focus:!ring-red-300'
	} 


	${
		place === 'head' &&
		nav === 'mobile' &&
		'focus:!ring-slate-300 hover:!ring-slate-300 !px-24'
	} 
  `;
	const styles = {
		primary:
			base +
			` bg-blue-500  text-blue-50 hover:bg-white hover:text-blue-700 hover:ring-blue-500 active:ring-blue-500`,
		secondary:
			base +
			` bg-slate-100  text-slate-700 hover:bg-white hover:text-slate-700 hover:ring-slate-500 active:ring-slat-500`,
		login:
			base +
			` bg-red-500  text-red-50 hover:bg-white hover:text-red-600 hover:ring-red-400 active:ring-red-400 `,
		mobile:
			base +
			` bg-slate-950/0  text-slate-50 ring-2 ring-slate-400 hover:text-slate-100 hover:ring-slate-100 active:ring-slate-100 text-base font-normal px-24 py-2 `,
		footer:
			base +
			` bg-slate-950/0  text-slate-50  hover:text-slate-100 text-sm font-normal py-2 `,
	};

	if (!type)
		return (
			<a
				onClick={onClick}
				href={to}
				className={`${base} hover:ring-0 px-2 active:ring-0 focus:ring-white hover:ring-white hover:text-red-600 active:text-red-600 ${
					nav === 'link' &&
					'text-slate-100 tracking-wider text-base font-normal  !focus:ring-0 !hover:ring-slate-950/80'
				} ${
					nav === 'mobile'
						? 'text-slate-100 tracking-wider text-base font-normal'
						: ''
				}`}
			>
				{children}
			</a>
		);

	return (
		<a onClick={onClick} href={to} className={`${styles[type]}`}>
			{children}
		</a>
	);
}

export default LinkButton;
