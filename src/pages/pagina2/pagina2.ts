import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams
   , public alertCtrl: AlertController
   , public loadingCtrl: LoadingController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad Pagina2Page');
  // }

  goPage3(){

    let confirm = this.alertCtrl.create({
      title: 'Confirmacion?',
      message: 'Desea navegar a pagina 3?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.navCtrl.push( "mi-pagina3" );
          }
        }
      ]
    });
    confirm.present();

    
  }
  
  ionViewDidLoad(){
    console.log("ionViewDidLoad")
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter")
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter")
  }

  ionViewWillLeave(){
    console.log("ionViewWillLeave")
  }

  ionViewCanLeave(){
    console.log("ionViewCanLeave");

    //console.log("espere 2 seg");

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    

    let promesa = new Promise( (resolve, reject) => {
      setTimeout(() =>  {
        resolve(true);
      }, 2000);
    });

    return promesa;

  }

  ionViewDidLeave(){
    console.log("ionViewDidLeave")
  }

  ionViewCanEnter(){


    // console.log("ionViewCanEnter")
    // return (Math.round(Math.random() * 10) ) % 2 == 0
  }

  ionViewWillUnload(){
    console.log("ionViewWillUnload")
  }


}
