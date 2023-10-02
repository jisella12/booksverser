import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('home');
    }, 1500);
  }
}
