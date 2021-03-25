import { Injectable, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
@Injectable({
  providedIn: 'root',
})
export class BeaconConnectionService {
  devices: any[] = [];
  meters: number;

  constructor(private ble: BLE, private ngZone: NgZone) {}

  doScan() {
    this.devices = [];

    this.ble.startScan([]).subscribe((device) => {
      if (device.name === 'Kontakt') {
        this.meters = Math.round(Math.pow(10, (-69 - device.rssi) / (10 * 2)));
        device.meters = this.meters;
        console.log(device);
        this.devices.push(device);
      }
    });
  }

  doStop() {
    this.ble.stopScan();
  }

  borrarArray() {
    this.devices = [];
  }

  getDevices() {
    this.devices.sort((n1, n2) => {
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
