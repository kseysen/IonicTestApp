import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListPilotesPage } from '../pages/list-pilotes/list-pilotes'
import { PilotesDescPage } from '../pages/pilotes-desc/pilotes-desc'
import { PilotesUpdatePage } from '../pages/pilotes-update/pilotes-update'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PiloteService } from '../services/pilotes/pilotes.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListPilotesPage,
    PilotesDescPage,
    PilotesUpdatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListPilotesPage,
    PilotesDescPage,
    PilotesUpdatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PiloteService
  ]
})
export class AppModule {}
