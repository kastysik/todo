export interface Todo {
    id: number;
    name: string;
    comment: string;
    state: TodoStates;
    priority: TodoPriorities;
}

export enum TodoStates {
    TODO = 'TODO',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}

export enum TodoPriorities {
    MINOR = 'MINOR',
    MEDIUM = 'MEDIUM',
    CRITICAL = 'CRITICAL'
}
