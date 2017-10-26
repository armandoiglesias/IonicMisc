import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { HomePage} from '../../pages/home/home';

import { AjustesProvider } from '../../providers/ajustes/ajustes'


@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  slides:any[] = [
  {
    title: "Bienvenido!!!",
    description: "Esta <b>aplicación</b> nos ayudará a comprender muchos temas interesantes en ionic!",
    image: "assets/imgs/ica-slidebox-img-1.png",
  },
  {
    title: "¿Qué es ionic?",
    description: "<b>Ionic Framework</b> es un SDK abierto que le permite a los desarrolladores crear aplicaciones móviles de alta calidad con el conocimiento de JavaScript, CSS y HTML.",
    image: "assets/imgs/ica-slidebox-img-2.png",
  },
  {
    title: "¿Que hace esta app?",
    description: "Esta aplicación nos ayudará a conocer más sobre el ciclo de vida de un componente y el storage!",
    image: "assets/imgs/ica-slidebox-img-3.png",
  }
];


  constructor(public navCtrl: NavController
          , public _ap : AjustesProvider ) {
  }

  saltar_tutorial(){

    this._ap.ajustes.mostrarTutorial = false;

    this._ap.guardarStorage();



    this.navCtrl.setRoot(HomePage);

  }



}