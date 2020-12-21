import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizerComponent } from './components/navigation/resizer/resizer.component';
import { ProjectComponent } from './project.component';
import { NavigationComponents } from './components/navigation';
import { AddTaskModalComponent } from './components/modal/add-task-modal/add-task-modal.component';
import { BoardPageComponents } from './components/board';
import { BoardsComponent } from './pages/boards/boards.component';

import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ICONS } from './config/icons';
import { ControlsModule } from '../controls/controls.module';
import { ProjectRoutingModule } from './project-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskCardComponent } from './components/task/task-card/task-card.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [
    ProjectComponent,
    ...NavigationComponents,
    ...BoardPageComponents,
    TaskCardComponent,
    ResizerComponent,
    AddTaskModalComponent,
    BoardsComponent,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NzToolTipModule,
    NzIconModule.forChild(ICONS),
    ControlsModule,
    DragDropModule,
    NzModalModule,
    ReactiveFormsModule,
    NzEmptyModule,
    NzCardModule
  ]
})
export class ProjectModule { }
