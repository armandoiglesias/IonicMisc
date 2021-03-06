import { Injectable  } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform} from 'ionic-angular'




@Injectable()
export class AjustesProvider {

  ajustes = {
    mostrarTutorial: true
  }

  constructor(private storage: Storage, private platform:Platform) {
    console.log('Hello AjustesProvider Provider');
  }

  cargarStorage(){

    let promesa = new Promise( ( resolve, reject) => {

      if(this.platform.is("cordova")){

        this.storage.ready()
          .then( () =>  {
            this.storage.get('ajustes').then((ajustes) => {

              if (ajustes){
                this.ajustes = ajustes;
              }
              
              resolve();
            });
          });

        
        
      }else{
        if(localStorage.getItem("ajustes")){
          this.ajustes = JSON.parse( localStorage.getItem("ajustes"));
        }

        resolve();
        
      }

    });

    return promesa;

    

  }

  guardarStorage(){
    if(this.platform.is("cordova")){

      this.storage.ready()
        .then( () => {
          this.storage.set("ajustes", this.ajustes);
        });

      
    }else{
      localStorage.setItem("ajustes", JSON.stringify(this.ajustes));
    }

  }

}
