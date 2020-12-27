import { IBoard } from './board';
import { IUser } from './user';

export interface ITask {
    joined: string[] | IUser[];
    _id: string;
    title: string;
    status: string;
    board: string | IBoard[];
    createAt: string;
    updateAt: string;
}

export enum TaskStatus {
    TODO = 'TODO',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}
