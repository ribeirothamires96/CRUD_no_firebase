import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VeicleService } from './veicle.service'

export const firebaseConfig = {
  apiKey: "AIzaSyB0SNnbAdiwCvUM8E3Flipt_9PyriM2XeI",
  authDomain: "fir-realtime-usjt.firebaseapp.com",
  databaseURL: "https://fir-realtime-usjt.firebaseio.com",
  projectId: "fir-realtime-usjt",
  storageBucket: "fir-realtime-usjt.appspot.com",
  messagingSenderId: "794811002365",
  appId: "1:794811002365:web:a6f94fb408a8decfd9fd94",
  measurementId: "G-XK84CF3MVK"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VeicleService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
