import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { AuthguardGuard } from './authguard.guard';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { EmpcreateComponent } from './empcreate/empcreate.component';
import { EmplistComponent } from './emplist/emplist.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { EmpresolvedService } from './emplist/empresolved.service';
import { ProductresolveService } from './productlist/productresolve.service';



const routes: Routes = [
   {path: '', component: LoginComponent,canActivate: [AuthguardGuard]},
   {path: 'login', component: LoginComponent},
   {path: 'Empcreate', component: EmpcreateComponent,canActivate: [AuthguardGuard]},
   {path: 'Emplist', component: EmplistComponent,canActivate: [AuthguardGuard],resolve: { getEmp: EmpresolvedService }},
   {path: 'productreate', component: ProductcreateComponent,canActivate: [AuthguardGuard]},
   {path: 'productlist', component: ProductlistComponent,canActivate: [AuthguardGuard],resolve: { getProduct: ProductresolveService }},
   {path:'module',loadChildren:'./module/module.module#ModuleModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthguardGuard]
})
export class AppRoutingModule { }
