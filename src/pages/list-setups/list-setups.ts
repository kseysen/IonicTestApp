import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SetupService } from '../../services/setups/setup.service';
import { Surface } from '../../services/surfaces/Surface';
import { Setup } from '../../services/setups/setup';
import { SetupDescPage } from '../../pages/setup-desc/setup-desc';
import { SetupAddPage } from '../../pages/setup-add/setup-add';


@Component({
  selector: 'page-list-setups',
  templateUrl: 'list-setups.html',
})
export class ListSetupsPage {

  item: Surface;
  setups: Setup[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private setupService :SetupService) {
    this.item = this.navParams.data;
    console.log(this.item);
    this
    .setupService
    .getSetupBySurface(this.item)
    .subscribe((data: Setup[]) => {
      this.setups = data;
    });
  }

  goToSetup(item : Setup) {
    this.navCtrl.push(SetupDescPage, item);
  }

  addSetup() {
    this.navCtrl.push(SetupAddPage, this.item);
  }

}
