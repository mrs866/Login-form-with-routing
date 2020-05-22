import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesComponent } from './modules/modules.component';
import { SharedModule } from '../sharedmodule/shared/shared.module';
import { Modules2Component } from './modules2/modules2.component';
import { Modules3Component } from './modules3/modules3.component';
import { ModuleRoutingModule } from './module-routing.module';
import { Modules4Component } from './modules4/modules4.component';



@NgModule({
  declarations: [ModulesComponent, Modules2Component, Modules3Component, Modules4Component],
  exports:[
    ModulesComponent
  ],
  imports: [
    SharedModule,ModuleRoutingModule
  ]
})
export class ModuleModule {
  constructor(){
    console.log("This is Module")
  }
 }
