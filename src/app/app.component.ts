import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {

  

  public appPages = [
    { title: 'Login', url: '/folder/login', icon: 'log-in' },
    { title: 'Registro', url: '/folder/registro', icon: 'reader' },
    { title: 'Libros', url: '/folder/producto', icon: 'book' },
    /* { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' }, */
  ];
  public labels = [];
  menuCtrl: any;
  constructor() {}
}