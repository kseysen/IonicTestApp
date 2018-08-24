import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListPilotesPage } from '../pages/list-pilotes/list-pilotes';
import { PilotesDescPage } from '../pages/pilotes-desc/pilotes-desc';
import { PilotesUpdatePage } from '../pages/pilotes-update/pilotes-update';
import { ListSurfacesPage } from '../pages/list-surfaces/list-surfaces';
import { ListSetupsPage } from '../pages/list-setups/list-setups';
import { SetupDescPage } from '../pages/setup-desc/setup-desc';
import { SetupUpdatePage } from '../pages/setup-update/setup-update';
import { SetupAddPage } from '../pages/setup-add/setup-add';
import { UploadModalPage } from '../pages/upload-modal/upload-modal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PiloteService } from '../services/pilotes/pilotes.service';
import { SurfaceService } from '../services/surfaces/surface.service';
import { SetupService } from '../services/setups/setup.service';
import { ImagesProvider } from '../providers/images/images';

import { HttpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListPilotesPage,
    PilotesDescPage,
    PilotesUpdatePage,
    ListSurfacesPage,
    ListSetupsPage,
    SetupDescPage,
    SetupUpdatePage,
    SetupAddPage,
    UploadModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListPilotesPage,
    PilotesDescPage,
    PilotesUpdatePage,
    ListSurfacesPage,
    ListSetupsPage,
    SetupDescPage,
    SetupUpdatePage,
    SetupAddPage,
    UploadModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PiloteService,
    SurfaceService,
    SetupService,
    ImagesProvider,
    ImagesProvider,
    Camera,
    FileTransfer
  ]
})
export class AppModule {}
