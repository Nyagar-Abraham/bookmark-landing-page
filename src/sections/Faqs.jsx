/* eslint-disable react/prop-types */
import { useState } from 'react';
import Container from '../componemts/Container';
import Heading from '../componemts/Heading';
import Icons from '../componemts/Icons';
import LinkButton from '../componemts/LinkButton';
import Paragraph from '../componemts/Paragraph';

function Faqs() {
	const [open, setOpen] = useState(null);

	function handleToggle(id) {
		if (open === id) setOpen(null);
		if (open !== id) setOpen(id);
	}

	return (
		<Container>
			<div className="mt-[6rem] mb-16">
				<div className="text-center">
					<Heading type="tertiary">Frequently Asked Questions</Heading>
					<Paragraph>
						Here are some of our FAQs. If you have any other questions
						you&apos;d like answered please feel free to email us.
					</Paragraph>
				</div>

				{/* faqs */}
				<ul
					className="flex flex-col gap-2 divide-y-[1px] divide-slate-300 border-y border-slate-300 py-2 mb-10 mt-10 mdl:w-10/12 mdl:mx-auto
        xl:w-8/12"
				>
					<Items
						toggle={handleToggle}
						id={1}
						open={open}
						quiz="What is Bookmark?"
						answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
					/>
					<Items
						id={2}
						open={open}
						toggle={handleToggle}
						quiz="How can I request a new browser?"
						answer="Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
					/>
					<Items
						id={3}
						open={open}
						toggle={handleToggle}
						quiz="Is there a mobile app?"
						answer="Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
sollicitudin ex et ultricies bibendum."
					/>
					<Items
						id={4}
						open={open}
						toggle={handleToggle}
						quiz="What about other Chromium browsers?"
						answer="Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
vitae neque eget nisl gravida pellentesque non ut velit.
"
					/>
				</ul>
				<div className="text-center mb-5">
					<LinkButton type="primary"> More Info</LinkButton>
				</div>
			</div>
		</Container>
	);
}

function Items({ quiz, answer, id, toggle, open }) {
	const isOpen = open === id;

	return (
		<li className="pt-2">
			<div className="flex justify-between items-center px-2">
				<p className="text-slate-950/80 font-semibold ">{quiz}</p>
				<button onClick={() => toggle(id)}>
					<Icons name={!isOpen ? 'arrow' : 'up'} />
				</button>
			</div>
			<p
				className={`w-11/12 mx-auto mt-3 bg-blue-50 shadow-sm py-2 px-2 text-sm hidden ${
					isOpen && `!block`
				}`}
			>
				{answer}
			</p>
		</li>
	);
}

export default Faqs;
