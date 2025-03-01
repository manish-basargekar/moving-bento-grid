import { useState, useEffect, useRef } from "react";
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
	const navbarRef = useRef<HTMLDivElement>(null);
	const tabRefs = useRef<Record<TabKey, HTMLDivElement | null>>({
		[TabKey.Home]: null,
		[TabKey.Work]: null,
		[TabKey.Blog]: null,
		[TabKey.Contact]: null,
	});

	useEffect(() => {
		const calculateSliderPosition = () => {
			const currentTabRef = tabRefs.current[tab];

			if (currentTabRef) {
				const rect = currentTabRef.getBoundingClientRect();
				setX(rect.left);
				setW(rect.width);
			}
		};

		calculateSliderPosition();

		window.addEventListener("resize", calculateSliderPosition);

		return () => {
			window.removeEventListener("resize", calculateSliderPosition);
		};
	}, [tab]);

	return (
		<main className="bg-[#f7f2f2] ">
			<Navbar
				tab={tab}
				setTab={setTab}
				left={x}
				sliderWidth={w}
				navRef={navbarRef}
				tabRefs={tabRefs}
			/>
			<Layout tab={tab} setTab={setTab} left={x} sliderWidth={w} />
		</main>
	);
}

export default App;
