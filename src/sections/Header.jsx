/* eslint-disable react/prop-types */
import { useState } from 'react';
import Container from '../componemts/Container';
import DesktopNav from '../componemts/DesktopNav';
import Icons from '../componemts/Icons';
import MobileNav from '../componemts/MobileNav';

function Header({ sticky }) {
	const [open, setOpen] = useState(false);

	return (
		<Container>
			<header
				className={`z-50 flex justify-between items-center py-2 ${
					sticky && `fixed top-0 left-3 right-3 bg-white `
				}`}
			>
				<Icons name="bookmark" color="#1e3a8a" />
				<button
					onClick={() => {
						setOpen((open) => !open);
					}}
					className=" md:hidden"
				>
					<Icons name="hamburger" />
				</button>

				<MobileNav open={open} setOpen={setOpen} />
				<DesktopNav />
			</header>
		</Container>
	);
}

export default Header;
