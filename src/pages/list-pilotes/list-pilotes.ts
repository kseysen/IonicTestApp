import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PiloteService } from '../../services/pilotes/pilotes.service'
import { Pilote } from '../../services/pilotes/Pilote'

@Component({
  selector: 'page-list-pilotes',
  templateUrl: 'list-pilotes.html',
})
export class ListPilotesPage {
  
  selectedItem: any;
  items: Pilote[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private piloteService : PiloteService) {
    this
    .piloteService
    .getPilotesFromServer()
    .subscribe((data: Pilote[]) => {
      this.items = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPilotesPage');
  }

}
