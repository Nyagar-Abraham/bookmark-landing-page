import { useState } from 'react';
import Cards from './sections/Cards';
import Cta from './sections/Cta';
import Download from './sections/Download';
import Faqs from './sections/Faqs';
import Features from './sections/Features';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Hero from './sections/Hero';
import TabSection from './sections/TabSection';
import TabsSelect from './sections/TabsSelect';

function App() {
	const [tab, setTab] = useState(1);
	const [sticky, setSticky] = useState(false);

	function handleTabs(tab) {
		setTab(tab);
	}

	return (
		<div className="transition-all duration-300 text-blue-950 relative  ">
			<Header sticky={sticky} />
			<Hero setSticky={setSticky} />
			<Features />
			<TabsSelect tab={tab} set={handleTabs} />
			<TabSection tab={tab} />
			<Download />
			<Cards />
			<Faqs />
			<Cta />
			<Footer />
		</div>
	);
}

export default App;
