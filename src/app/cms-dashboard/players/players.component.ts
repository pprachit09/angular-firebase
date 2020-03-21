import { Component, OnInit, Input } from '@angular/core';
import {CsmUserdataService} from '../../csm-userdata.service';
import * as UsersEnums from '../../cms-login/cms-login-enum';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  userData=[];
  playerData:any=[];
  usersEnums = UsersEnums;
  updateplayer=false;
  
  createNewPlayer=false;
  editplayer:any;
  teams;
  ;
  // @Input() appName:any;
  constructor(private csmUserdataService: CsmUserdataService) { }


  ngOnInit() {
    // if(this.appName=='portfolio'){
    //   this.title='Portfolio players';
    //   this.showCreatePlayer=false;
    // }else{
    //   this.title='Players';
    //   this.showCreatePlayer=true;
    // }
    this.getAllplayers();
  }

  SetSortingOptions(){
// sort columns logic
  }
  getAllplayers(){
const url = this.usersEnums.UsersWebApis.dummyData;
this.csmUserdataService.getJSON(url).subscribe(data => {
  if (data != ""){
    this.playerData = data.userdata.Players;
    this.teams=data.userdata.teams;
  }
})
  }

  CreatePlayer() {
    this.createNewPlayer = true;
    this.updateplayer = true;
  }
  editPlayer(playerinfo) {
    this.updateplayer = true;
    this.createNewPlayer = false;
    this.editplayer = playerinfo;
  }
  BackBtnClicked(){
    this.updateplayer = false;
  }
}
