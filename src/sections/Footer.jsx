import Container from '../componemts/Container';
import Icons from '../componemts/Icons';
import LinkButton from '../componemts/LinkButton';

function Footer() {
	return (
		<Container place="footer">
			<footer className="w-11/12 mx-auto text-center py-8 md:flex md:justify-between md:items-center xl:w-10/12">
				<div className="flex flex-col items-center justify-center gap-1 md:flex-row">
					<Icons name="bookmark" color="#f1f5f9" />
					<LinkButton type="footer">Features</LinkButton>
					<LinkButton type="footer">Pricing</LinkButton>
					<LinkButton type="footer">Contact </LinkButton>
				</div>
				<div className=" mt-10 md:mt-0 flex gap-4 justify-center items-center">
					<Icons name="facebook" />
					<Icons name="twitter" />
				</div>
			</footer>
		</Container>
	);
}

export default Footer;
