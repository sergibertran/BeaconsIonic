import { Injectable } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
@Injectable({
  providedIn: 'root'
})
export class BeaconConnectionService {

  constructor(private ble: BLE) {

    ble.startScan([]).subscribe(device => {
      console.log(JSON.stringify(device));


    });


   }


}
