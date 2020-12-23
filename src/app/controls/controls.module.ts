import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgDefinitionsComponent } from './svg-definitions/svg-definitions.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ButtonComponent } from './button/button.component';

const ControlsComponent = [
  ButtonComponent,
  SvgDefinitionsComponent,
  SvgIconComponent,
  AvatarComponent,
  BreadcrumbsComponent,
];
@NgModule({
  declarations: ControlsComponent,
  exports: ControlsComponent,
  imports: [CommonModule],
})
export class ControlsModule { }
