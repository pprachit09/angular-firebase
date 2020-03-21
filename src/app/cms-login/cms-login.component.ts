import { Component, OnInit } from '@angular/core';
import * as UsersEnums from './cms-login-enum';
import {CsmUserdataService} from '../csm-userdata.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cms-login',
  templateUrl: './cms-login.component.html',
  styleUrls: ['./cms-login.component.scss']
})
export class CmsLoginComponent implements OnInit {
  passwordToggel = false;
  isRemember = false;
  usersEnums = UsersEnums;
  model: any = {};
  wrongDataAlert = false;
  submitted = false;
  userData:any=[];
  constructor( private csmUserdataService: CsmUserdataService, private route : Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.submitted = true;
    if (form.invalid) {
      return false;
    }
    this.checkUser();
  }

  checkUser() {
const url=this.usersEnums.UsersWebApis.dummyData;
var param={
username:this.model.Username,
password:this.model.password
}
this.csmUserdataService.getJSON(url).subscribe(data => {
  if(data){
    this.userData=data.userdata.users;
    var islogin = this.userData.find(o => (o.UserName === param.username)&&(o.password===param.password));
    if(islogin){
      this.route.navigate(['dashboard']);
    }
  }
})
}
}
