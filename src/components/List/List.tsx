import { Todo } from '../../models/todo.model';
import TodoComponent from '../Todo/Todo';
import './List.less';

interface ListProps {
    todos: Todo[];
}

function List(props: ListProps) {
    return (
        <div className="list">
            {props.todos.map((todo, index) => (<TodoComponent key={index} todo={todo}></TodoComponent>))}
        </div>
    );
}

export default List;
