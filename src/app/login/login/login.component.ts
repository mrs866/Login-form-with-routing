import { Component, OnInit, } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
public loginscuess=false;
  constructor(private routes : Router, private service : MyServiceService) { }
msg="";
  ngOnInit() {
  }
  check(uname: string, p : string)
  {
    this.loginscuess=true;

    var output = this.service.checkusernameandpassword(uname, p);
    if(output == true)
    {
      this.routes.navigate(['/Empcreate']);
    }
    else{
        this.msg ='username or password are incorrect';
    }
 
 
}

}
