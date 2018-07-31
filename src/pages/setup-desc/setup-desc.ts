import { Component } from '@angular/core';
import { NavController, NavParams , Nav } from 'ionic-angular';
import { Setup } from '../../services/setups/setup';
import { SetupUpdatePage } from '../../pages/setup-update/setup-update';
import { SetupService } from '../../services/setups/setup.service';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';


@Component({
  selector: 'page-setup-desc',
  templateUrl: 'setup-desc.html',
})
export class SetupDescPage {

  item: Setup;
  constructor(public navCtrl: NavController,
     public navParams: NavParams ,
     private setupService : SetupService,
     private alertCtrl: AlertController,
     public nav: Nav) {
    this.item = this.navParams.data;
  }

  edit(item : Setup) {
    this.navCtrl.push(SetupUpdatePage, item);
  }

  delete(item : Setup){
    this.presentAlert();
  }


  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Suppression de setup',
      subTitle: 'Etes vous sûr de vouloir supprimer ce setup ?',
      buttons: [{
        text: 'Oui',
        role: 'cancel',
        handler: () => {
          this
          .setupService
          .deleteSetup(this.item)
          .subscribe(response => response,
          error => console.log(error)
          )
          this.nav.setRoot(HomePage);
        }
      },
      {
        text: 'Annuler',
        role: 'cancel',
      }]
    });
    alert.present();
  }
}
