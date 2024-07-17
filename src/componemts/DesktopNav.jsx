/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import LinkButton from './LinkButton';

function DesktopNav() {
	return (
		<nav className="hidden md:block">
			<ul className="flex  ">
				<Link>features</Link>
				<Link>pricing</Link>
				<Link>contacts</Link>
				<span className="ml-2 ">
					<Link type="login">login</Link>
				</span>
			</ul>
		</nav>
	);
}

function Link({ children }) {
	if (children === 'login')
		return (
			<li>
				<LinkButton to={`#${children}`} type="login" place="head">
					{children}
				</LinkButton>
			</li>
		);

	return (
		<li>
			<LinkButton to={`#${children}`} place="head">
				{children}
			</LinkButton>
		</li>
	);
}

export default DesktopNav;
