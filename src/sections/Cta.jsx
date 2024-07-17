import { useState } from 'react';
import Container from '../componemts/Container';
import Icons from '../componemts/Icons';
import LinkButton from '../componemts/LinkButton';
import { useEffect } from 'react';

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(email) {
	return emailPattern.test(email);
}

function Cta() {
	const [message, setMessage] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		setMessage('');
		const { email } = Object.fromEntries(new FormData(e.target));
		const mes = {};
		if (validateEmail(email)) mes.success = 'true';
		if (!validateEmail(email)) mes.success = 'false';
		setMessage(mes);
	}

	useEffect(() => {
		const id = setTimeout(() => setMessage(''), 5000);

		return () => {
			clearTimeout(id);
		};
	}, [message]);



	return (
		<Container  place="cta">
			<div id='contacts' className=" w-11/12 text-center mx-auto text-blue-50 py-12">
				<p className="uppercase text-xs tracking-wider mb-2">
					{' '}
					35,000+ already joined
				</p>
				<p className="text-xl font-semibold">
					Stay up-to-date with what we&apos;re doing
				</p>
				<div
					className="mt-8 flex flex-col gap-4 xs:w-9/12 xs:mx-auto xl:w-7/12 
        sm:flex-row sm:w-11/12 mdl:w-8/12 "
				>
					<form onSubmit={handleSubmit} className="grow relative">
						<input
							onClick={() => setMessage('')}
							type="email"
							name="email"
							required
							placeholder="Enter your email adress..."
							className={`py-1 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-200 hover:bg-blue-50 rounded-md sm:grow font-inherit  text-slate-700 ${
								message.success === 'false' && `!ring-red-400`
							}`}
						/>
						<button
							className={`absolute top-1/2 right-4 -translate-y-1/2 hidden ${
								message.success === 'false' && '!block'
							}`}
						>
							<Icons name="error" />
						</button>
						<label
							className={`left-0 right-0 h-6 -bottom-7 rounded-md  absolute hidden ${
								message?.success &&
								message.success === 'true' &&
								`bg-green-500 !block`
							} ${
								message?.success &&
								message.success === 'false' &&
								`bg-red-500 !block `
							}`}
						>
							{message?.success && message.success === 'true'
								? 'your email has been submitted successfully'
								: 'email is not valid or exists'}
						</label>
					</form>
					<LinkButton type="login">Contact Us</LinkButton>
				</div>
			</div>
		</Container>
	);
}

export default Cta;
