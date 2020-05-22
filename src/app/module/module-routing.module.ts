import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesComponent } from './modules/modules.component';
import { Modules2Component } from './modules2/modules2.component';
import { Modules3Component } from './modules3/modules3.component';
import { RouterModule,Routes } from '@angular/router';
import { Modules4Component } from './modules4/modules4.component';

const routes: Routes = [

  { path:'',component: ModulesComponent,
  children:[{path:'',component: Modules2Component},
    
           {path:'module3',component: Modules3Component},
           {path:'module4',component: Modules4Component},
           ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModuleRoutingModule { }
