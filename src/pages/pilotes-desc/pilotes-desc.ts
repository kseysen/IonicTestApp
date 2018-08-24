import { Component } from '@angular/core';
import { Pilote } from '../../services/pilotes/Pilote'
import { PilotesUpdatePage } from '../pilotes-update/pilotes-update'
import { NavParams, NavController, ActionSheetController , ViewController, ModalController, AlertController, normalizeURL} from 'ionic-angular';
import { Camera,} from '@ionic-native/camera';
import { ImagesProvider } from '../../providers/images/images';
import { UploadModalPage } from '../upload-modal/upload-modal';
import { PiloteService } from '../../services/pilotes/pilotes.service'





@Component({
  selector: 'page-pilotes-desc',
  templateUrl: 'pilotes-desc.html',
})
export class PilotesDescPage {

  base64Image: any;
  imageUrl:String;
  imageModal:any;
  item: Pilote;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private imagesProvider: ImagesProvider, private camera: Camera,
    private actionSheetCtrl: ActionSheetController,
    private viewController: ViewController,
    private modalController: ModalController,
    private alertCtrl: AlertController,
    private piloteService: PiloteService) {
      this.item = this.navParams.data;  
      this.reloadImages();
  }

  edit(item : Pilote) {
    this.navCtrl.push(PilotesUpdatePage, item);
  }

  reloadImages() { 
    if(this.item.imageId != null){
      this.imageUrl = normalizeURL(this.imagesProvider.getUrlImageByPilote(this.item));
      console.log(this.imageUrl);
    }  
    else{
      this.imageUrl = "https://radiant-anchorage-58124.herokuapp.com/images/5b76ced4fe5b3daafddf5c0d";
    }
  }

  /*deleteImage(img) {
    this.imagesProvider.deleteImage(img).subscribe(data => {
      this.reloadImages();
    });
  }

  openImage(img) {
    let modal = this.modalCtrl.create('PreviewModalPage', { img: img });
    modal.present();
  }*/

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
 
    // Get the data of an image
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image =  "data:image/jpeg;base64," + imageData;
      this.imageModal = normalizeURL(imageData)
      let modal = this.modalController.create(UploadModalPage, { data: imageData, pilote: this.item, image: this.imageModal });
      modal.present();
      modal.onDidDismiss(data => {
        if (data && data.reload) {
          this.reloadImages();
        }
      }); 
        
    }, (err) => {
      console.log('Error: ', err);
    });
  }

}
