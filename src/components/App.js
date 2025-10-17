import React from 'react';

import Header from './Header';
import Search from './Search';
import List from './List';
import Footer from './Footer';

class App extends React.Component {

	state = {
		todoData: [
			{ id: 0, title: 'Выпить кофе', important: false, done: false },
			{ id: 1, title: 'Сделать React приложение', important: true, done: false },
			{ id: 2, title: 'Позавтракать', important: false, done: false },
		],
	}

	onToggleImportant = (id) => {
		this.setState((state) => {

			const index = state.todoData.findIndex((el) => {return el.id === id});

			const oldItem = state.todoData[index];

			const newItem = {...oldItem, important: !oldItem.important};

			const part1 = state.todoData.slice(0, index);
			const part2 = state.todoData.slice(index + 1);

			const newArray = [...part1, newItem, ...part2];

			return {
				todoData: newArray,
			}
		})
	}

	onToggleDone = (id) => {
		this.setState((state) => {

			const index = state.todoData.findIndex((el) => {return el.id === id});

			const oldItem = state.todoData[index];

			const newItem = {...oldItem, done: !oldItem.done};

			const part1 = state.todoData.slice(0, index);
			const part2 = state.todoData.slice(index + 1);

			const newArray = [...part1, newItem, ...part2];

			return {
				todoData: newArray,
			}
		})
	}


	render(){
		return (
			<div>
				{/*Передаем компоненты для отрисовки*/}
				<Header />
				<Search />
				<List data={this.state.todoData} onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone}/>
				<Footer />
			</div>
		);
	}
}


export default App;
