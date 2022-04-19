import { createStore } from 'redux';
import reducer from './reducers/todosReducer';
import { Todo } from '../models/todo.model';

export interface TodosStore {
    todos: Todo[];
}


function configureStore(state: TodosStore = { todos: [] }) {
    return createStore(reducer as any, state);
}

export default configureStore;
