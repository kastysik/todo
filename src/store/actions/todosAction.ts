import { Todo } from '../../models/todo.model';

export const addTodo = (payload: Todo) => {
    return {
        type: 'add_todo',
        payload
    }
};

export const removeTodo = (payload: number) => {
    return {
        type: 'remove_todo',
        payload
    }
};

export const updateTodo = (payload: Todo) => {
    return {
        type: 'update_todo',
        payload
    }
};
