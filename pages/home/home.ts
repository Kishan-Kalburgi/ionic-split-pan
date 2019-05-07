import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['./home.css']
})
export class HomePage {

slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  
  constructor(public navCtrl: NavController) {

  }

}
