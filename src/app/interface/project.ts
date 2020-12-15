import { IBoard } from './board';

export interface IProject {
    name: string;
    url: string;
    description: string;
    boards: IBoard[];
}
