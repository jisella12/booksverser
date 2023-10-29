import { Component } from '@angular/core';
import {register} from 'swiper/element/bundle'; 
register ();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {

  

  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Libros', url: 'producto', icon: 'book' },
    { title: 'Favoritos', url: '/folder/Favoritos', icon: 'heart' },
    { title: 'Mi Cuenta', url: '/folder/Mi Cuenta', icon: 'person' }, 
    { title: 'Carrito', url: '/folder/Carro', icon: 'cart' },
    { title: 'Login', url: 'login', icon: 'log-in' },
   
    
    /* { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' }, */
  ];
  public labels = [];
  menuCtrl: any;
  constructor() {}
}