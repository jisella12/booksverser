import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  images = [
    'https://i.pinimg.com/564x/1f/03/5d/1f035d318d5f6ce4deccf5e4ab3c0efc.jpg',
    'https://i.pinimg.com/564x/f2/eb/54/f2eb5409211cf036f934b18a0b4f8711.jpg',
    'https://i.pinimg.com/564x/4e/bd/8a/4ebd8a8b49964eacded5e3e0cb9bdcc7.jpg',
    'https://i.pinimg.com/564x/61/92/ea/6192eac97639d8aa8fc4eb7f86019bcf.jpg',
  ];
 
  constructor(private activateRoute: ActivatedRoute, private router: Router) { 
    this.activateRoute.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras.state?.['user'];
        console.log(this.data);
      }else{
        this.router.navigate(["/inicio"]);
      }
    });
    
  }
  data(data: any) {
    throw new Error('Method not implemented.');
  }
  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
  goNext(){
    this.swiper?.slideNext();
  }
  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }
  cerrarSesion(){
    localStorage.removeItem('ingresado');
    this.router.navigate(["/home"]);
  }
  

  ngOnInit(): void {
  }

}
