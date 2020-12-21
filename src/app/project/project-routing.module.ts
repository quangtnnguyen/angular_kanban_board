import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './pages/board/board.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { ProjectComponent } from './project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    children: [
      {
        path: 'board',
        component: BoardComponent,
      },
      {
        path: 'boards',
        component: BoardsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
