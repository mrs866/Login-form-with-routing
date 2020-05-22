import { Component, OnInit, Inject, Optional } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MyServiceService } from '../my-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-empcreate',
  templateUrl: './empcreate.component.html',
  styleUrls: ['./empcreate.component.css']
})
export class EmpcreateComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
 
  constructor(
    private fb: FormBuilder,
    private customValidator: MyServiceService,private rout:Router,private http:HttpClient,private router:ActivatedRoute    
  ){}
  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }
  get registerFormControl() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;

   
     if (this.registerForm.invalid) {
         return;
     }

     var formData: any = { 
      name  :this.registerForm.get('name').value,
      email  :this.registerForm.get('email').value,
      password  :this.registerForm.get('password').value,
      confirmPassword  :this.registerForm.get('confirmPassword').value,     
     }
     this.http.post("http://localhost:1234/employee", formData)
     .subscribe((res:Response)=>{
       console.log(res);
      })
     alert("Successfully")
     this.rout.navigate(['/Emplist']);    
 }
}


  
  

 

