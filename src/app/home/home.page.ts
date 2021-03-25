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

  meters: any;

  constructor(private BeaconConnectionService: BeaconConnectionService) {}

  ngOnInit() {
    interval(15000).subscribe((x) => {
      console.log('scan');

      this.startScan();
    });

    interval(1000).subscribe((x) => {
      console.log('refresh');

      this.scannedItems();
    });
  }

  startScan() {
    this.BeaconConnectionService.doScan();
  }

  stopScan() {
    this.BeaconConnectionService.doStop();
    this.sub1.unsubscribe();
  }
  scannedItems() {
    this.kontaktDevices = this.BeaconConnectionService.getDevices();
  }
  deleteArray() {
    this.BeaconConnectionService.borrarArray();
  }

  viewItem(item) {
    this.meters = Math.round(Math.pow(10, (-69 - item.rssi) / (10 * 2)));

    alert(
      'RSSI: ' +
        item.rssi +
        ' Concretamente a ' +
        this.meters +
        ' metros' +
        ' con id ' +
        item.id
    );
  }
}
