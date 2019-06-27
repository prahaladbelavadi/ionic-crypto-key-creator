import { Component } from '@angular/core';
import { address } from 'bitcoinjs-lib';

import { ECPair, bip32, Payment, crypto } from "./../../../node_modules/bitcoinjs-lib";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  addresses = []
  keyPair;
  createAddress() {
    // import stuff froom bitcoinjs to create am address
    this.keyPair = ECPair.makeRandom();
    console.log(this.keyPair);


    // this.addresses.push(address)
    // return address
  }

}
