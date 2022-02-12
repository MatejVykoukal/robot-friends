import { useEffect, useState } from 'react';
import Search from './components/Search';
import { shortenString } from './utilities';
import './App.css';

function App() {
	const [loadMoreCount, setLoadMoreCount] = useState(1);
	const [loading, setLoading] = useState(false);
	const [robotsData, setRobotsData] = useState([]);

	const getNewData = async () => {
		setLoading(true);

		// Returns array with 10 posts
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts?userId=${loadMoreCount}`
		);
		const data = await response.json();

		const newRobots = data.map((post) => ({
			name: shortenString(post.title, 10, false),
			image: `https://robohash.org/${post.id}`,
			description: post.body,
			id: post.id,
		}));

		// Fake response timeout
		setTimeout(() => {
			setLoading(false);
			setRobotsData([...robotsData, ...newRobots]);
		}, 2000);

		setLoadMoreCount((i) => i + 1);
	};

	useEffect(() => {
		getNewData();
	}, []);

	return (
		<div className="app">
			<h1 className="uppercase">Robofriend app</h1>

			<Search robotsData={robotsData} />

			{loadMoreCount <= 10 && Boolean(robotsData.length) && (
				<button className="component" disable={loading} onClick={getNewData}>
					Load more
				</button>
			)}
			<div className={`loading ${loading ? 'visible' : ''}`}>
				<div class="lds-dual-ring"></div>
			</div>
		</div>
	);
}

export default App;
