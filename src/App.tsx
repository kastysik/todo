import './App.css';
import { Todo } from './models/todo.model';
import Todos from './components/Todos/Todos';
import Header from './components/Header/Header';
import { useSelector } from 'react-redux';
import { TodosStore } from './store/store';

function App() {
    const todos: Todo[] = useSelector((state: TodosStore) => state.todos);
    return (
        <div className="app">
            <Header></Header>
            <Todos todos={todos}></Todos>
        </div>
    );
}

export default App;
