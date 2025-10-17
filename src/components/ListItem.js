import React from 'react';

//* Наш компонент является расширением компонента React
class ListItem extends React.Component {

	//* Функция рендера компонента
	render() {

		//* Сохраняем базовый класс
		let classNames = 'todo-item'

		//* Добавляем класс если отмечено "Важно"
		if (this.props.task.important) {
			classNames += ' important';
		}

		//* Добавляем класс если отмечено "Завершено"
		if (this.props.task.done) {
			classNames += ' done';
		}

		//* Отрисовка элемента
		return (
			<li className={classNames}>
				{/*Здесь вызов функции по клику и работа с принятыми пропсами*/}
				<span onClick={() => {this.props.onToggleDone(this.props.task.id)}} className="todo-item-text">{this.props.task.title}</span>
				<div className="btn-group">
					{/*Здесь также вызов функции по клику*/}
					<button onClick={() => {this.props.onToggleImportant(this.props.task.id)}} role="button" className="btn btn-outline-dark btn-sm">
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
