import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import {  Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MyServiceService } from './my-service.service';
import { ArticelComponent } from './articel/articel.component';
import { EmpcreateComponent } from './empcreate/empcreate.component';
import { EmplistComponent } from './emplist/emplist.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ValidateUserNameDirective } from './validate-user-name.directive';
import { MatchPasswordDirective } from './match-password.directive';
import { PasswordPattrenDirective } from './password-pattren.directive';
import { EmpresolvedService } from './emplist/empresolved.service';
import { ProductresolveService } from './productlist/productresolve.service';
import { ModuleModule } from './module/module.module';
import { LifehookchildComponent } from './lifehooks/lifehookchild/lifehookchild.component';
import { LifehookparentComponent } from './lifehooks/lifehookparent/lifehookparent.component';
import { MessageService } from './lifehooks/message.service';
import { MatButtonModule } from '@angular/material';
import { DailogboxComponent } from './dailogbox/dailogbox.component';
import { AngularmaterialModule } from './angularmaterial/angularmaterial.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TemplatedrivenformComponent,
    ArticelComponent,
    EmpcreateComponent,
    EmplistComponent,
    ProductcreateComponent,
    ProductlistComponent,
    ValidateUserNameDirective,
    MatchPasswordDirective,
    PasswordPattrenDirective,
    LifehookchildComponent,
    LifehookparentComponent,
    DailogboxComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,AngularmaterialModule,
    ModuleModule,
    FormsModule,
    BrowserAnimationsModule,MatButtonModule
  ],
  entryComponents: [EmpcreateComponent],
  providers: [AuthguardGuard,MyServiceService
	,Validators,EmpresolvedService,ProductresolveService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("This is AppModule")
  }
 }
