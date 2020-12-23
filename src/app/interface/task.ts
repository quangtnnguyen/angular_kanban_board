import { IBoard } from './board';
import { IUser } from './user';

export interface ITask {
    joined: IUser[];
    _id: string;
    title: string;
    status: string;
    board: string;
    createAt: string;
    updateAt: string;
}

export enum TaskStatus {
    TODO = 'To do',
    IN_PROGRESS = 'In Progress',
    DONE = 'Done'
}
