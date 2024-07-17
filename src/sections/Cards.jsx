/* eslint-disable react/prop-types */
import Container from '../componemts/Container';
import Heading from '../componemts/Heading';
import Icons from '../componemts/Icons';
import LinkButton from '../componemts/LinkButton';
import Paragraph from '../componemts/Paragraph';

function Cards() {
	return (
		<Container>
			<div
				id="pricing"
				className=" grid sm:grid-cols-8 gap-8 mt-10 text-center mdl:
      mdl:items-center  mdl:grid-cols-3"
			>
				<Card
					icon="chrome"
					heading="Add to Chrome"
					text="Minimum version 62"
					link="Add & Install Extension"
				/>
				<Card
					icon="firefox"
					heading="Add to Firefox"
					text="Minimum version 62"
					link="Add & Install Extension"
				/>
				<Card
					icon="opera"
					heading="Add to Opera"
					text="Minimum version 46"
					link="Add & Install Extension"
				/>
			</div>
		</Container>
	);
}

function Card({ icon, heading, text, link }) {
	return (
		<div
			className={` bg-white py-4 pt-8 overflow-hidden rounded-[1rem] shadow-md w-8/12 sm:w-full mx-auto col-span-4 mdl:mt-10 mdl:self-center mdl:col-span-1 mdl:h-8/12 ${
				icon === 'opera' && 'sm:col-start-3 mdl:translate-y-6'
			} ${icon === 'chrome' && 'mdl:-translate-y-6'}`}
		>
			<div className="flex items-center justify-center mb-8">
				<Icons name={icon} />
			</div>

			<Heading type="tertiary">{heading}</Heading>
			<Paragraph>{text}</Paragraph>
			<div className="pt-4">
				<Icons name="dots" />
			</div>
			<div className="mt-4 py-4  ">
				<LinkButton type="primary">{link}</LinkButton>
			</div>
		</div>
	);
}

export default Cards;
