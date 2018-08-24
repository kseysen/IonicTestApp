import { Component, ViewChild  } from '@angular/core';
import { NavController, NavParams , Nav} from 'ionic-angular';

import { PiloteService } from '../../services/pilotes/pilotes.service'
import { Pilote } from '../../services/pilotes/Pilote'
import { PilotesDescPage } from '../pilotes-desc/pilotes-desc'

@Component({
  selector: 'page-list-pilotes',
  templateUrl: 'list-pilotes.html',
})
export class ListPilotesPage {
  @ViewChild(Nav) nav: Nav;
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

  goToDetail(item : Pilote) {
    this.navCtrl.push(PilotesDescPage, item);
  }

}
