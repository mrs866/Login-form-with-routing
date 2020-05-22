import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Users } from '../productcreate/Users';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private myservice: MyServiceService,private rout:Router,private http:HttpClient,private router:ActivatedRoute) { 
   
    this.users=this.router.snapshot.data['getProduct'];
  
}

  columns = [ "Id","ProductName","ProductQuantity "," ProductPrice", "ManufacturingDate"];
  index = [ "id","productname", "productquantity", "productPrice", "manufacturingDate"];
  users : Users[] = [];

  ngOnInit(): void {
    this.myservice.getProduct().subscribe
    (
      (response)=>
      {
        this.users = response;
      },
      (error) => console.log(error)
    )
  }
}
