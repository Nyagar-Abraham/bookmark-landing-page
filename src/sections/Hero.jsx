/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import Container from '../componemts/Container';
import Heading from '../componemts/Heading';
import Icons from '../componemts/Icons';
import LinkButton from '../componemts/LinkButton';
import Paragraph from '../componemts/Paragraph';

function Hero({ setSticky }) {
	const ref = useRef();
	useEffect(() => {
		const callback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setSticky(false);
				} else {
					setSticky(true);
				}

				// Each entry describes an intersection change for one observed
				// target element:
				//   entry.boundingClientRect
				//   entry.intersectionRatio
				//   entry.intersectionRect
				//   entry.isIntersecting
				//   entry.rootBounds
				//   entry.target
				//   entry.time
			});
		};

		const observer = new IntersectionObserver(callback, {
			root: null,
			threshold: 0,
		});

		if (ref.current) {
			observer.observe(ref.current);
		}

		// Cleanup function to disconnect the observer
		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
			observer.disconnect();
		};
	}, [setSticky]);

	return (
		<Container>
			<div
				ref={ref}
				className="grid gap-1 mt-16 md:gap-2 md:items-start items-center justify-center text-center pb-4 md:grid-cols-2 xl:mt-24"
			>
				<div className="md:col-start-2">
					<Icons name="hero" />
				</div>
				<div className="md:row-start-1">
					<Heading>A Simple Bookmark Manager</Heading>
					<Paragraph>
						A clean and simple interface to organize your favourite websites.
						Open a new browser tab and see your sites load instantly. Try it for
						free.
					</Paragraph>
					<div className="flex gap-4 justify-center sm:mt-6 md:mt-2">
						<LinkButton to={'#pricing'} type="primary">
							Get it on Chrome
						</LinkButton>
						<LinkButton to={'#pricing'} type="secondary">
							Get it on Firefox
						</LinkButton>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default Hero;
