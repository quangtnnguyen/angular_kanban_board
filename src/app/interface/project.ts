import { IBoard } from './board';
import { ITask } from './task';
import { IUser } from './user';

export interface IProject {
    name: string;
    url: string;
    description: string;
    selectedBoardId: string;
    boards: IBoard[];
    tasks: ITask[];
    users: IUser[];
}
