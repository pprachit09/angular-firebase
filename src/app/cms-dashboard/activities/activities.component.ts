import { Component, OnInit } from '@angular/core';
import { CsmUserdataService } from '../../csm-userdata.service';
import * as UsersEnums from '../../cms-login/cms-login-enum';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  ActivitiesData = [];
  usersEnums = UsersEnums
  constructor(private csmUserdataService: CsmUserdataService) { }

  ngOnInit() {
    this.getAllactivities();
  }

  SetSortingOptions(){

  }
  getAllactivities() {
    const url = this.usersEnums.UsersWebApis.dummyData;
    this.csmUserdataService.getJSON(url).subscribe(data => {
      if (data != "") {
        this.ActivitiesData = data.userdata.activities;
      }
    })
  }

}
