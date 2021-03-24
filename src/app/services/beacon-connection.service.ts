import { Injectable, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
@Injectable({
  providedIn: 'root',
})
export class BeaconConnectionService {
  devices: any[] = [];

  constructor(private ble: BLE, private ngZone: NgZone) {




  }

  doScan() {
    this.devices=[{
      name: "TI SensorTag",
      id: "BD922605-1B07-4D55-8D09-B66653E51BBA",
      rssi: -79,
      advertising: "aa"
  },{
    name: "TI SensorTag",
    id: "BD922605-1B07-4D55-8D09-B66653E51BBA",
    rssi: -86,
    advertising: "aa"
}];

  /*
    this.ble.startScan([]).subscribe((device) => {
      console.log(JSON.stringify(device));
      this.devices.push(device);
    });
    */
  }

  doStop() {
    this.ble.stopScan();
  }

  getDevices() {

    this.devices.sort((n1,n2) => {
      if (n1.rssi < n2.rssi) {
          return 1;
      }

      if (n1.rssi > n2.rssi) {
          return -1;
      }

      return 0;
  });


    return this.devices;
  }
}
