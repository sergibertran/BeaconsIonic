import { Injectable, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
@Injectable({
  providedIn: 'root',
})
export class BeaconConnectionService {
  devices:any[] = [];

  constructor(private ble: BLE,private ngZone: NgZone) {

    }

    doScan(){
      this.ble.startScan([]).subscribe(device => {
        console.log(JSON.stringify(device));
        this.devices.push(device)
      });

    }

    doStop(){
      this.ble.stopScan();

    }

    getDevices(){

      return this.devices;
    }

  }

