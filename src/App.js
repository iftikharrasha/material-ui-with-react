import './App.css';
import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import News from './Components/News/News';

function App() {
	const [ articles, setArticles ] = useState([]);
	useEffect(() => {
		const url =
			'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5a3c78c1225e419198f076e0caa1ba3d';
		fetch(url).then((res) => res.json()).then((data) => setArticles(data.articles));
	}, []);

	return (
		<div className="App">
			<h2>Headlines: {articles.length}</h2>
			{articles.map((article) => <News article={article} />)}
		</div>
	);
}

export default App;
