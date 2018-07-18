import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PiloteService } from '../../services/pilotes/pilotes.service'
import { Pilote } from '../../services/pilotes/Pilote'

@Component({
  selector: 'page-pilotes-update',
  templateUrl: 'pilotes-update.html',
})
export class PilotesUpdatePage {

  item: Pilote;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private piloteService : PiloteService) {
    this.item = this.navParams.data;
  }

  edit(){
    this
    .piloteService
    .editPilotes(this.item)
    .subscribe(response => response,
    error => console.log(error)
    );
    this.navCtrl.pop();
  }
}
