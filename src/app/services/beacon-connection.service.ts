import { Injectable, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { Key } from 'protractor';
@Injectable({
  providedIn: 'root',
})
export class BeaconConnectionService {
  devices: any[] = [];
  meters: number;
  last_seen: number;
  dict = new Map<String, Object>();
  myDate: string | number | Date;
  constructor(private ble: BLE, private ngZone: NgZone) {}

  doScan() {


    this.ble.isLocationEnabled();


    this.ble.startScan([]).subscribe((device) => {





      if (device.name === 'Kontakt') {
        this.meters = Math.round(Math.pow(10, (-69 - device.rssi) / (10 * 2)));
        device.meters = this.meters;
        this.last_seen = Date.now();
        device.last_seen=this.last_seen;


        if (this.dict.has(device.id) == true) {
          this.dict.delete(device.id);
        }
        this.dict.set(device.id, device);

        for (let value of this.dict.values()) {

          if((Date.now()-value['last_seen'])/1000>30){

            console.log(value['id']);

            console.log( this.dict.delete(value['id']));
            console.log( this.dict.has(value['id']));

          }

        }


        this.devices = Array.from(this.dict);
      }
    });
  }

  doStop() {
    this.ble.stopScan();
  }



  getDevices() {
    this.sortMethod();
    return this.devices;
  }

  sortMethod() {
    this.devices.sort((n1, n2) => {
      if (n1[1].rssi < n2[1].rssi) {
        return 1;
      }

      if (n1[1].rssi > n2[1].rssi) {
        return -1;
      }

      return 0;
    });
  }



}
