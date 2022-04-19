import { TodosStore } from '../store';
import { AnyAction } from 'redux';

const reducer = (state: TodosStore, action: AnyAction): TodosStore => {
    switch (action.type) {
        case 'add_todo':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case 'remove_todo':
            const todos = state.todos.filter(todo => todo.id !== action.payload);
            return {
                ...state,
                todos
            };
        case 'update_todo':
            const updatedTodo = state.todos.find(todo => todo.id === action.payload.id);
            if (!!updatedTodo) {
                updatedTodo.priority = action.payload.priority;
                updatedTodo.name = action.payload.name;
                updatedTodo.comment = action.payload.comment;
                updatedTodo.state = action.payload.state;
            }
            return {
                ...state,
                todos: [...state.todos]
            }
        default:
            return state;
    }
};

export default reducer;
