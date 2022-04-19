import { Todo, TodoStates } from '../../models/todo.model';
import List from '../List/List';
import './Todos.less';
import StateBadge from '../common/StateBadge/StateBadge';
import { useSelector } from 'react-redux';
import { TodosStore } from '../../store/store';

interface TodosProps {
    todos: Todo[];
}

function Todos(props: TodosProps) {
    const todos: Todo[] = useSelector((state: TodosStore) => state.todos);
    return (
        <div className="todos">
            <div className="todos__todo">
                <StateBadge stateKey={TodoStates.TODO}></StateBadge>
                <List todos={todos.filter(todo => todo.state === TodoStates.TODO)}></List>
            </div>
            <div className="todos__in-progress">
                <StateBadge stateKey={TodoStates.IN_PROGRESS}></StateBadge>
                <List todos={todos.filter(todo => todo.state === TodoStates.IN_PROGRESS)}></List>
            </div>
            <div className="todos__done">
                <StateBadge stateKey={TodoStates.DONE}></StateBadge>
                <List todos={todos.filter(todo => todo.state === TodoStates.DONE)}></List>
            </div>
        </div>
    );
}

export default Todos;
