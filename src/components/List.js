import ListItem from "./ListItem";

function List(props) {
	//* Формируем jsx разметку из компонентов ListItem, передавая компоненту задачу и ключ
	const render = props.data.map((task) => {
		return (
			<ListItem
				key={task.id}
				task={task}
				onToggleImportant={props.onToggleImportant}
				onToggleDone={props.onToggleDone}
				deleteItem={props.deleteItem}
			/>
		);
	});

	//* Формируем jsx разметку на случай если нет задач
	const emptyList = (
		<li className="todo-item justify-content-center">
			<span className="todo-item-text">Список дел пуст</span>
		</li>
	);

	//* формируем список задач, а если его нет показываем, что задач нет
	return (
		<ul className="todo-list">
			{props.data.length > 0 ? render : emptyList}
		</ul>
	);
}

export default List;
