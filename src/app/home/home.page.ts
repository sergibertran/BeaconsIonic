import { Component, OnInit } from '@angular/core';
import { BeaconConnectionService } from '../services/beacon-connection.service';
import { interval } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  kontaktDevices: any[] = [];
  sub1: any;
  sub2: any;
  meters: any;

  constructor(private BeaconConnectionService: BeaconConnectionService) {



  }

  ngOnInit() {
    this.sub1 = interval(2000).subscribe((x) => {
      console.log('2secons');
      this.startScan();
      this.scannedItems();
    });


 }

  startScan() {
    this.BeaconConnectionService.doScan();
  }

  stopScan() {
    this.BeaconConnectionService.doStop();
    this.sub1.unsubscribe();
    this.sub2.unsubscribe(); //x quina rao la de 6 no es para
  }
  scannedItems() {
    this.kontaktDevices = this.BeaconConnectionService.getDevices();
  }

  viewItem(item) {



    this.meters=Math.round(Math.pow(10,((-69 - (item.rssi))/(10 * 2))))


    alert('RSSI: ' + item.rssi+ ' Concretamente a '+this.meters+' metros');
  }


}
