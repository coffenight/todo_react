import { Component } from "react";
import Header from "./Header";
import Search from "./Search";
import List from "./List";
import Footer from "./Footer";
import StatusBar from "./StatusBar";

class App extends Component {
	state = {
		todoData: [
			{ id: 0, title: "Выпить кофе", important: false, done: false },
			{ id: 1, title: "Сделать React приложение", important: true, done: true },
			{ id: 2, title: "Позавтракать", important: false, done: false },
		],
		term: "",
		status: "all",
	};

	deleteItem = (id) => {
		this.setState((state) => {
			return {
				todoData: state.todoData.filter((task) => {
					return task.id !== id;
				}),
			};
		});
	};

	toggleParam = (param, id) => {
		this.setState((state) => {
			const newArray = state.todoData.map((task) => {
				return {
					...task,
					[param]: task.id === id ? !task[param] : task[param],
				};
			});

			return {
				todoData: newArray,
			};
		});
	}

	onToggleImportant = (id) => {
		this.toggleParam("important", id);
	};

	onToggleDone = (id) => {
		this.toggleParam('done', id)
	};

	addItem = (title) => {
		this.setState((state) => {
			const id = state.todoData[state.todoData.length - 1]["id"] + 1;

			const newItem = { id: id, title: title, important: false, done: false };

			const newArray = [...state.todoData, newItem];
			return { todoData: newArray };
		});
	};

	search = (items, term) => {
		if (term.trim().length === 0) {
			return items;
		}

		return items.filter((item) => {
			if (item.title.toLowerCase().indexOf(term.toLowerCase().trim()) > -1) {
				return true;
			}
		});
	};

	changeTerm = (term) => {
		this.setState({
			term: term,
		});
	};

	filterByStatus = (items, status) => {
		switch (status) {
			case "all":
				return items;
			case "active":
				return items.filter((item) => {
					return item.done === false;
				});
			case "done":
				return items.filter((item) => {
					return item.done === true;
				});
			default:
				return items;
		}
	};

	changeStatus = (status) => {
		this.setState({
			status: status,
		});
	};

	render() {
		const filteredBySearchItems = this.search(this.state.todoData, this.state.term);
		const filteredByStatusItems = this.filterByStatus(filteredBySearchItems, this.state.status);

		return (
			<div>
				{/*Передаем компоненты для отрисовки*/}
				<Header />
				<div className="search">
					<Search changeTerm={this.changeTerm} term={this.state.term} />
					<StatusBar changeStatus={this.changeStatus} status={this.state.status} />
				</div>
				<List
					data={filteredByStatusItems}
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone}
					deleteItem={this.deleteItem}
				/>
				<Footer addItem={this.addItem} />
			</div>
		);
	}
}

export default App;
