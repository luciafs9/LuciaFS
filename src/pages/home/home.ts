import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private nameAuthor: string;


  constructor(public navCtrl: NavController) {

    this.nameAuthor = "LUCIA FERNANDEZ ";
  }

}
