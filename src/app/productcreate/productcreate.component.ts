import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {

  constructor(private serives:MyServiceService,private http:HttpClient,private rout: Router) { }
  submitted=false;

  ngOnInit() {
  }
  submitHandler(myForm) {
    console.log(myForm);
  }

  public productobj:object={};

  addnewproduct=function(myForm){
    this.submitted=true;
    console.log(myForm);
   
    this.productobj={
      "productname": myForm.productname,
      "productquantity" : myForm.productquantity,
      "productPrice" : myForm.productPrice,
      "manufacturingDate":myForm.manufacturingDate
    }

    this.http.post('http://localhost:3456/production/',this.productobj)
    .subscribe((res:Response)=>{
      console.log(res);
     })
    alert("Successfully")
    this.rout.navigate(['/productlist']);
  }

}
