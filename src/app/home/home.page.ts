import { Component } from '@angular/core';
import { BeaconConnectionService } from '../services/beacon-connection.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private BeaconConnectionService: BeaconConnectionService) {}


  startScan(){


  this.BeaconConnectionService.doScan();

  }

  stopScan(){

    this.BeaconConnectionService.doStop();

    }






}
