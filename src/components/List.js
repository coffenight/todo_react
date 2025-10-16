import ListItem from './ListItem';

function List() {
	//* Создаем массив с задачами
	const tasks = [
		{ id: 0, title: 'Выпить кофе' },
		{ id: 1, title: 'Сделать React приложение' },
		{ id: 2, title: 'Позавтракать' },
	];

	//* Формируем jsx разметку из компонентов ListItem, передавая компоненту задачу и ключ
	const render = tasks.map((task) => {
		return <ListItem key={task.id} task={task} />;
	});

	//* Формируем jsx разметку на случай если нет задач
	const emptyList = (
		<li className="todo-item justify-content-center">
			<span className="todo-item-text">Список дел пуст</span>
		</li>
	);

	//* формируем список задач, а если его нет показываем, что задач нет
	return <ul className="todo-list">{tasks.length > 0 ? render : emptyList}</ul>;
}

export default List;
