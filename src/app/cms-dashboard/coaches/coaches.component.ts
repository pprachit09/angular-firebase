import { Component, OnInit } from '@angular/core';
import {CsmUserdataService} from '../../csm-userdata.service';
import * as UsersEnums from '../../cms-login/cms-login-enum';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {
  coachData=[];
  usersEnums=UsersEnums;
  editCoach=false;
  coachdata:any;
  teams:any;
  constructor(private csmUserdataService: CsmUserdataService) { }

  ngOnInit() {
    this.getAllcoaches();
  }

  SetSortingOptions(){
// sort columns logic
  }

  getAllcoaches(){
    const url = this.usersEnums.UsersWebApis.dummyData;
    this.csmUserdataService.getJSON(url).subscribe(data => {
      if(data != ""){
        this.coachData = data.userdata.coaches;
        this.teams=data.userdata.teams;
      }
    })
      }

      updateInfo(coachData){
      this.coachdata=coachData;
      this.editCoach=true;
      }
      BacktoCoachlist(){
        this.editCoach=false;
      }
}
