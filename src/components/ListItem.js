import React from 'react';

//* Наш компонент является расширением компонента React
class ListItem extends React.Component {

	//* Задаем поля изменение которых должно влечь изменение состояния и новую отрисовку элемента
	state = {
		important: false,
		done: false
	}

	//* Функция для изменения состояния "Важно", по сути меняем флаг
	onImportantClick = () => {
		this.setState((state) => {
			return {
				important: !state.important
			}
		})
	}

	//* Функция для изменения состояния "Завершено", по сути меняем флаг
	onDoneClick = () => {
		this.setState((state) => {
			return {
				important: false,
				done: !state.done
			}
		})
	}

	//* Функция рендера компонента
	render() {

		//* Сохраняем базовый класс
		let classNames = 'todo-item'

		//* Добавляем класс если отмечено "Важно"
		if (this.state.important) {
			classNames += ' important';
		}

		//* Добавляем класс если отмечено "Завершено"
		if (this.state.done) {
			classNames += ' done';
		}

		//* Отрисовка элемента
		return (
			<li className={classNames}>
				{/*Здесь вызов функции по клику и работа с принятыми пропсами*/}
				<span onClick={this.onDoneClick} className="todo-item-text">{this.props.task.title}</span>
				<div className="btn-group">
					{/*Здесь также вызов функции по клику*/}
					<button onClick={this.onImportantClick} role="button" className="btn btn-outline-dark btn-sm">
						Важное
					</button>
					<button role="button" className="btn btn-outline-danger btn-sm">
						Удалить
					</button>
				</div>
			</li>
		);
	}
}




export default ListItem;
