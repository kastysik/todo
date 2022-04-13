import { Todo, TodoStates } from '../../models/todo.model';

function List() {
    const todos: Todo[] = [
        {
            id: 1,
            name: 'Task 1',
            comment: 'Dela po domy',
            state: TodoStates.TODO
        },
        {
            id: 2,
            name: 'Task 2',
            comment: 'Dela po rabote',
            state: TodoStates.TODO
        },
        {
            id: 1,
            name: 'Task 3',
            comment: 'Prigotovit edy',
            state: TodoStates.IN_PROGRESS
        },
    ];
    return (
        <div>
            <div className="todo"></div>
            <div className="in-progress"></div>
            <div className="done"></div>
        </div>
    );
}

export default List;
