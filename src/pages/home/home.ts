import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProgramacaoPage } from '../programacao/programacao';
import { CadastroPage } from '../cadastro/cadastro';

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
  GoCadastro(){
    this.navCtrl.push(CadastroPage);
  }

}
