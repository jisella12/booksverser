import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceRestService } from '../services/service-rest.service';
import { ToastController, ToastOptions } from '@ionic/angular';

@Component({
  selector: 'app-edit-libro',
  templateUrl: './edit-libro.page.html',
  styleUrls: ['./edit-libro.page.scss'],
})
export class EditLibroPage implements OnInit {


  libros: any; 

  libro: any ={
  id: null,
  titulo: "",
  autor: "",
  cita: "",
  resena: ""
}

  constructor(
    private api: ServiceRestService, 
    private toastController: ToastController,
    private router: Router,) { }

  getIdFromUrl(){
    let url = this.router.url;
    let arr = url.split('/',3);
    let id = parseInt(arr[2])
    return id;
  }

  ngOnInit() {
    this.getLibroId(this.getIdFromUrl());
  }

  updateLibro(){
    this.api.updateLibro(this.libro.id, this.libro).subscribe({
      next: (() =>{
        console.log("Actualizado correctamente: "+ this.libro);
        this.getLibrolist();
        this.presentToast({
          message: 'Datos del Libro actualizados, redirigiendo al Home',
          duration: 1500,
          position: 'middle',
          icon: 'alert-circle-outline'
        });
        this.router.navigateByUrl('rating');
      }),
      error: (error => {
        console.log("Error "+ error)
      })
    })
  }

  getLibrolist(){
    this.api.getLibroList().subscribe((data) =>{
      console.log(data);
      this.libros = data;
    });
  }

  getLibroId(id: any){
    this.api.getLibroId(id).subscribe((data) => {
      console.log(data);
      this.libro = data
    })
  }

  




  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastController.create(opts);
    toast.present();
  }

}
