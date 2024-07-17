/* eslint-disable react/prop-types */

import Container from './Container';
import Icons from './Icons';
import LinkButton from './LinkButton';

function MobileNav({ open, setOpen }) {
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<nav
			className={` z-50 absolute bg-slate-950/80 top-0 left-0 right-0 h-screen translate-x-full transition-all duration-500 hidden   ${
				open && `backdrop-blur !translate-x-0 !block`
			} `}
		>
			<Container place="nav">
				<div className="flex justify-between items-center mt-5 mb-10">
					<Icons name="bookmark" color="#f1f5f9" />
					<button onClick={() => setOpen((open) => !open)}>
						<Icons name="close" />
					</button>
				</div>
				<ul className=" flex flex-col   space-y-2 mb-5 divide-y-[1px] divide-slate-500 border-t border-slate-500 pb-2 ">
					<Link handleClose={handleClose}>features</Link>
					<Link handleClose={handleClose}>pricing</Link>
					<Link handleClose={handleClose}>contacts</Link>
					<Link handleClose={handleClose}>login</Link>
				</ul>
				<div className="mt-32 flex items-center justify-center gap-4">
					<Icons name="facebook" />
					<Icons name="twitter" />
				</div>
			</Container>
		</nav>
	);
}

function Link({ children, handleClose }) {
	if (children === 'login')
		return (
			<li className={`text-center pt-2 ${children === 'login' && 'pt-6'} `}>
				<LinkButton
					onClick={handleClose}
					place="head"
					nav="mobile"
					type="mobile"
				>
					{children}
				</LinkButton>
			</li>
		);

	return (
		<li className="text-center pt-2 ">
			<LinkButton
				onClick={handleClose}
				to={`#${children}`}
				place="head"
				nav="link"
			>
				{children}
			</LinkButton>
		</li>
	);
}

export default MobileNav;
