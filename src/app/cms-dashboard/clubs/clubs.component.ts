import { Component, OnInit } from '@angular/core';
import {CsmUserdataService} from '../../csm-userdata.service';
@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {

  constructor(private csmUserdataService: CsmUserdataService) { }

  ngOnInit() {
  }

}
