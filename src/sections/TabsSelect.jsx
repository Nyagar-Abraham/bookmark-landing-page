/* eslint-disable react/prop-types */
import Container from '../componemts/Container';

function TabsSelect({ tab, set }) {
	return (
		<Container>
			<ul
				className="mt-10 mb-8 flex flex-col md:flex-row md:gap-4 md:justify-center divide-y-[1px]
        md:border-t-0
        md:w-8/12
        xl:w-7/12  md:mx-auto 
        md:divide-y-0 divide-slate-300 border-y mdl:w-10/12 mdl:mx-auto
      xl:w-8/12  border-slate-300"
			>
				<Tab tab={tab} id={1} set={set}>
					Simple Bookmarking
				</Tab>
				<Tab tab={tab} id={2} set={set}>
					Speedy Searching
				</Tab>
				<Tab tab={tab} id={3} set={set}>
					{' '}
					Easy Sharing
				</Tab>
			</ul>
		</Container>
	);
}

function Tab({ children, set, id, tab }) {
	const isOpen = id === tab;

	return (
		<li className="text-center text-slate-950/80  pt-2 text-sm font-semibold">
			<button
				onClick={() => set(id)}
				className={`border-b-2 border-transparent hover:text-slate-950 hover:border-red-500 focus:border-red-500 pb-2 ${
					isOpen && `!border-blue-500`
				}`}
			>
				{children}
			</button>
		</li>
	);
}

export default TabsSelect;
