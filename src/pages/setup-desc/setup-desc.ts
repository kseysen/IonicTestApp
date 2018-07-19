import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Setup } from '../../services/setups/setup';



@Component({
  selector: 'page-setup-desc',
  templateUrl: 'setup-desc.html',
})
export class SetupDescPage {

  item: Setup;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.data;
  }

  /*edit(item : Setup) {
    this.navCtrl.push(SetupUpdatePage, item);
  }*/

}
