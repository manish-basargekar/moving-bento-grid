import { useState, useEffect } from "react";
import Layout from "./components/layout";
import Navbar from "./components/navbar";

export enum TabKey {
	Home = "Home",
	Work = "Work",
	Blog = "Blog",
	Contact = "Contact",
}

function App() {
	const [tab, setTab] = useState<TabKey>(TabKey.Home);
	const [x, setX] = useState(0);
	const [w, setW] = useState(0);

	const tabOffsets = {
		Home: 0,
		Work: 1,
		Blog: 2,
		Contact: 3,
	};

	useEffect(() => {
		const calculateSliderPosition = () => {
			const navbarElement = document.querySelector(".navbar"); 

			if (navbarElement) {
				const tabElements = navbarElement.querySelectorAll(".tab"); 

				if (tabElements.length > 0) {
					const baseX = tabElements[0].getBoundingClientRect().left;
					const baseW = tabElements[0].getBoundingClientRect().width;

					setX(baseX + tabOffsets[tab] * baseW);
					setW(baseW);
				}
			}
		};

		calculateSliderPosition();

		window.addEventListener("resize", calculateSliderPosition);

		return () => {
			window.removeEventListener("resize", calculateSliderPosition);
		};
	}, [tab]);

	return (
		<main className="bg-[#f7f2f2]">
			<Navbar tab={tab} setTab={setTab} left={x} sliderWidth={w} />
			<Layout tab={tab} setTab={setTab} left={x} sliderWidth={w} />
		</main>
	);
}

export default App;
