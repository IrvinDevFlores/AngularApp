import { UserService} from './services/user-service.service';
import { Component } from '@angular/core';

import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor() {

  }


}

/*
  Creando carpeta de modelos
  ng g cl models/employee


  importar modulo de formularios para poder usar el doble enlace de datosS

  creacion de servicios

*/
