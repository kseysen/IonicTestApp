import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { Setup } from '../../services/setups/setup';
import { SetupService } from '../../services/setups/setup.service';
import { Surface } from '../../services/surfaces/Surface';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';


@Component({
  selector: 'page-setup-add',
  templateUrl: 'setup-add.html',
})
export class SetupAddPage {

  item: Setup;
  surface: Surface;
  bool: Boolean;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private setupService : SetupService,
    private alertCtrl: AlertController,
    public nav: Nav) {
      this.surface = this.navParams.data;
      this.item = this.navParams.data;
      this.item.surface = this.surface.name;

  }

  
  add(){
      this
      .setupService
      .addSetup(this.item)
      .subscribe(response => response,
      error => console.log(error)
      )
      this.presentAlert();
  }


  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Creation de setup',
      subTitle: 'Vous venez de créer un setup',
      buttons: [{
        text: 'OK',
        role: 'cancel',
        handler: () => {
          this.nav.setRoot(HomePage);
        }
      }]
    });
    alert.present();
  }
  
}
