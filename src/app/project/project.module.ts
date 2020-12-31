import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizerComponent } from './components/navigation/resizer/resizer.component';
import { ProjectComponent } from './project.component';
import { NavigationComponents } from './components/navigation';
import { BoardPageComponents } from './components/board';
import { BoardsComponent } from './pages/boards/boards.component';
import { UsersComponent } from './pages/users/users.component';
import { TaskAssigneesSelectComponent } from './components/task-assignees-select/task-assignees-select.component';
import { UserComponent } from './components/user/user.component';

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
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [
    ProjectComponent,
    ...NavigationComponents,
    ...BoardPageComponents,
    TaskCardComponent,
    ResizerComponent,
    BoardsComponent,
    UsersComponent,
    TaskAssigneesSelectComponent,
    UserComponent
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
    NzCardModule,
    NzGridModule,
    NzSelectModule,
    NzMessageModule
  ]
})
export class ProjectModule { }
