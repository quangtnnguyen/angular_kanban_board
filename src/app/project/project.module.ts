import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ProjectRoutingModule } from './project-routing.module';
import { ResizerComponent } from './components/navigation/resizer/resizer.component';

import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ProjectComponent } from './project.component';
import { NavigationComponents } from './components/navigation';
import { ICONS } from './config/icons';
import { ControlsModule } from '../controls/controls.module';
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
  declarations: [
    ProjectComponent,
    ...NavigationComponents,
    ResizerComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NzToolTipModule,
    NzIconModule.forChild(ICONS),
    ControlsModule
  ]
})
export class ProjectModule { }
