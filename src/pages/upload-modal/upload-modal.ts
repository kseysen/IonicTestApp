import { ImagesProvider } from '../../providers/images/images';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { PiloteService } from '../../services/pilotes/pilotes.service';
import { Pilote } from '../../services/pilotes/Pilote';


@Component({
  selector: 'page-upload-modal',
  templateUrl: 'upload-modal.html',
})
export class UploadModalPage {
  imageData: any;
  //desc: string;
  pilote: Pilote;
  image:any;
  imageID:any;
 
  constructor(public navCtrl: NavController, private navParams: NavParams,
      private viewCtrl: ViewController,
      private imagesProvider: ImagesProvider,
      private piloteService: PiloteService) {
    this.imageData = this.navParams.get('data');
    this.pilote = this.navParams.get('pilote');
    this.image = this.navParams.get('image');
  }
 
  saveImage() {
    this.imagesProvider.uploadImage(this.imageData).then(res=> {

      this.imageID = res.response;
      console.log("imageId :", this.imageID );
      this.pilote.imageId = this.imageID;

      this
      .piloteService
      .editPilotes(this.pilote)
      .subscribe(response => response,
      error => console.log(error)
      );       

      this.viewCtrl.dismiss({reload: true});
    }, err => {
      this.dismiss();
    });
  }
 
  dismiss() {
    this.viewCtrl.dismiss();
  }
 
}