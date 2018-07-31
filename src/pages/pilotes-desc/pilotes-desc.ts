import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Pilote } from '../../services/pilotes/Pilote'
import { PilotesUpdatePage } from '../../pages/pilotes-update/pilotes-update'


@Component({
  selector: 'page-pilotes-desc',
  templateUrl: 'pilotes-desc.html',
})
export class PilotesDescPage {

  item: Pilote;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.data;
  }

  edit(item : Pilote) {
    this.navCtrl.push(PilotesUpdatePage, item);
  }



}
