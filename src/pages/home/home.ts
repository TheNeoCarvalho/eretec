import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProgramacaoPage } from '../programacao/programacao';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }
  GoProgramcao(){
    this.navCtrl.push(ProgramacaoPage);
  }
}
