export interface Todo {
    id?: number;
    name: string;
    comment: string;
    state: TodoStates;
}

export enum TodoStates {
    TODO = 'TODO',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}
