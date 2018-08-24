import { Injectable } from '@angular/core';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';


@Injectable()
export class ImagesProvider {
  baseUrl: string = "https://radiant-anchorage-58124.herokuapp.com/";
  //baseUrl: String = "http://localhost:3000/";
  constructor(public http: Http, private transfer: FileTransfer) {
    console.log('Hello ImagesProvider Provider');
  }

  getImages() {
    return this.http.get(this.baseUrl + 'images').map(res => res.json());
  }

  getImageByPilote(data) {
    return this.http.get(this.baseUrl + 'images/'+ data.imageId);
  }

  getUrlImageByPilote(data){
    return this.baseUrl + 'images/'+ data.imageId;
  }
 
  deleteImage(img) {
    return this.http.delete(this.baseUrl + 'images/' + img._id);
  }

  uploadImage(img) { 
    // Destination URL
    let url = this.baseUrl + 'images';
 
    // File for Upload
    var targetPath = img;
 
    var options: FileUploadOptions = {
      fileKey: 'image',
      chunkedMode: false,
      mimeType: 'multipart/form-data',
      //params: { 'desc': desc }
    };
 
    const fileTransfer: FileTransferObject = this.transfer.create();
 
    // Use the FileTransfer to upload the image
    return fileTransfer.upload(targetPath, url, options); 
  }

}
