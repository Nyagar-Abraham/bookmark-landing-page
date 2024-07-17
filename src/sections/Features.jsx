import Container from '../componemts/Container';
import Heading from '../componemts/Heading';
import Paragraph from '../componemts/Paragraph';

function Features() {
	return (
		<Container>
			<div id="features" className="mt-16 text-center">
				<Heading type="secondary">Features</Heading>
				<Paragraph>
					Our aim is to make it quick and easy for you to access your favourite
					websites. Your bookmarks sync between your devices so you can access
					them on the go.
				</Paragraph>
			</div>
		</Container>
	);
}

export default Features;
