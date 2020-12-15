import { IBoard } from './board';
import { IUser } from './user';

export interface ITask {
    joined: IUser[];
    _id: string;
    title: string;
    status: string;
    board: IBoard;
    createAt: Date;
    updateAt: Date;
}
