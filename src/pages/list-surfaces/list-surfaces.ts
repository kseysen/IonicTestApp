import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SurfaceService } from '../../services/surfaces/surface.service'
import { Surface } from '../../services/surfaces/Surface'
import { ListSetupsPage } from '../list-setups/list-setups'


@Component({
  selector: 'page-list-surfaces',
  templateUrl: 'list-surfaces.html',
})
export class ListSurfacesPage {

  items: Surface[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private surfaceService : SurfaceService) {
    this
    .surfaceService
    .getSurfacesFromServer()
    .subscribe((data: Surface[]) => {
      this.items = data;
    });
  }

  goToList(item : Surface) {
    this.navCtrl.push(ListSetupsPage, item);
  }

}
