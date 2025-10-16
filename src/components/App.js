import Header from './Header';
import Search from './Search';
import List from './List';
import Footer from './Footer';

function App() {
	return (
		<div>
			{/*Передаем компоненты для отрисовки*/}
			<Header />
			<Search />
			<List />
			<Footer />
		</div>
	);
}

export default App;
