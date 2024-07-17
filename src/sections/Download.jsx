import Container from '../componemts/Container';
import Heading from '../componemts/Heading';
import Paragraph from '../componemts/Paragraph';

function Download() {
	return (
		<Container>
			<div className="text-center mt-16">
				<Heading type="secondary">Download the extension</Heading>
				<Paragraph>
					We&apos;ve got more browsers in the pipeline. Please do let us know if
					you&apos;ve got a favourite you&apos;d like us to prioritize.
				</Paragraph>
			</div>
		</Container>
	);
}

export default Download;
