/* eslint-disable react/prop-types */
import Container from '../componemts/Container';
import Heading from '../componemts/Heading';
import Paragraph from '../componemts/Paragraph';
import TabIcons from '../componemts/TabIcons';

const tabs = {
	one: {
		icon: '1',
		heading: ' Bookmark in one click',
		text: 'Organize your bookmarks however you like, Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
	},
	two: {
		icon: '2',
		heading: 'Intelligent search',
		text: 'Our powerful search feature will help you find saved sites in no time at all No need to trawl through all  your bookmarks.',
	},
	three: {
		icon: '3',
		heading: 'Share your bookmarks',
		text: 'Easily share your bookmarks and collections with others Create a shareable link that you can send at the click  a button.',
	},
};

function TabSection({ tab }) {
	let display;
	if (tab === 1) display = 'one';
	if (tab === 2) display = 'two';
	if (tab === 3) display = 'three';

	return (
		<Container>
			<div className="grid gap-2 md:grid-cols-2 md:mt-4 xl:mt-16 ">
				<div
					className="flex relative justify-center before:content-[''] before:block before:bg-blue-500 
          before:absolute  before:w-8/12 before:h-3/5 before:bottom-0 before:left-[-2rem] -before:z-0; before:rounded-r-[3.5rem]"
				>
					<div className=" z-20 w-10/12 mx-auto     ">
						<TabIcons tab={tabs[display]?.icon} />
					</div>
				</div>
				<div className="text-center xl:self-center xl:justify-self-center">
					<Heading type="secondary">{tabs[display]?.heading} </Heading>
					<Paragraph>{tabs[display]?.text}</Paragraph>
				</div>
			</div>
		</Container>
	);
}

export default TabSection;
