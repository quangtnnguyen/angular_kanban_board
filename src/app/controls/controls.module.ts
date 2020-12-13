import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgDefinitionsComponent } from './svg-definitions/svg-definitions.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';


const ControlsComponent = [SvgDefinitionsComponent, SvgIconComponent];
@NgModule({
  declarations: ControlsComponent,
  exports: ControlsComponent,
  imports: [
    CommonModule
  ]
})
export class ControlsModule { }
