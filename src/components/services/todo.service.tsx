import { TodoStates } from '../../models/todo.model';

export default function getTodoColorClassByStateKey(stateKey: TodoStates, baseClass: string): string {
    switch (stateKey) {
        case TodoStates.TODO: {
            return `${baseClass}__todo`;
        }
        case TodoStates.IN_PROGRESS: {
            return `${baseClass}__in-progress`;
        }
        case TodoStates.DONE: {
            return `${baseClass}__done`;
        }
    }
}
