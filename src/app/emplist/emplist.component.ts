import { Component, OnInit, ViewChild } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Users } from '../productcreate/Users';
import { Users1 } from '../empcreate/Users1';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatTable, MatDialog } from '@angular/material';
import { DailogboxComponent } from '../dailogbox/dailogbox.component';



@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email','password','confirmpassword','action'];

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(private myservice: MyServiceService, public dialog: MatDialog,rout:Router,private http:HttpClient,private router:ActivatedRoute) { 
       this.users1=this.router.snapshot.data['getEmp'];

  } 
  users1 : Users1[] = [];

  ngOnInit(): void {
    this.myservice.getEmp().subscribe
    (
      (response)=>
      {
        this.users1 = response;
      },
      (error) => console.log(error)
    )
  }
  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DailogboxComponent, {
      width: '250px',
      data:obj
    });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result.event == 'Add'){
  //       this.addRowData(result.data);
  //     }else if(result.event == 'Update'){
  //       this.updateRowData(result.data);
  //     }else if(result.event == 'Delete'){
  //       this.deleteRowData(result.data);
  //     }
  //   });
  // }

  // addRowData(row_obj){
  //   var d = new Date();
  //   this.dataSource.push({
  //     id:d.getTime(),
  //     name:row_obj.name
  //   });
  //   this.table.renderRows();
    
  // }
  // updateRowData(row_obj){
  //   this.dataSource = this.dataSource.filter((value,key)=>{
  //     if(value.id == row_obj.id){
  //       value.name = row_obj.name;
  //     }
  //     return true;
  //   });
  // }
  // deleteRowData(row_obj){
  //   this.dataSource = this.dataSource.filter((value,key)=>{
  //     return value.id != row_obj.id;
  //   });
  // }

  }
}