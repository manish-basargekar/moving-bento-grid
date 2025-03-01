import { useState } from "react";
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


	return (
		<main className="bg-[#f7f2f2] ">
			<Navbar
				tab={tab}
				setTab={setTab}
				left={x}
				sliderWidth={w}
				setX={setX}
				setW={setW}
			/>
			<Layout tab={tab} setTab={setTab} left={x} sliderWidth={w} />
		</main>
	);
}

export default App;
