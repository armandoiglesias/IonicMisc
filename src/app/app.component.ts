import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AjustesProvider } from '../providers/ajustes/ajustes'

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(private platform: Platform
    , statusBar: StatusBar
    , splashScreen: SplashScreen
    , _servicio: AjustesProvider) {
    platform.ready().then(() => {

      _servicio.cargarStorage()
        .then(() => {
          if (_servicio.ajustes.mostrarTutorial) {
            this.rootPage = "IntroPage"
          } else {
            this.rootPage = HomePage;
          }

          this.platform.pause.subscribe( () => {
            console.log("la aplicacion se detendra");
          } );

          this.platform.resume.subscribe( () => {
            console.log("La aplicacion continuara");
          });


          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          statusBar.styleDefault();
          splashScreen.hide();
        });

    });
  }
}

