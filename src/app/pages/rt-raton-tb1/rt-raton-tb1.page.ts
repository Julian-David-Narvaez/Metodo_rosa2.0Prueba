import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rt-raton-tb1',
  templateUrl: './rt-raton-tb1.page.html',
  styleUrls: ['./rt-raton-tb1.page.scss'],
})
export class RtRatonTb1Page implements OnInit {
  private resultadoRaton!: number; 

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log("Componente inicializado");
    this.resultadoRaton = parseInt(localStorage.getItem("resultadoRaton") || "0");
    this.mostrarContador();
  }

  goBack() {
    this.navCtrl.back(); 
  }
  goNext() {
    this.navCtrl.navigateForward('/opc-rt-tb1'); 
  }

  mostrarContador() {
    console.log(`resultado Raton: ${this.resultadoRaton}`);
  }

  handleClick(incremento: number) {
    this.resultadoRaton+= incremento;
    localStorage.setItem("resultadoRaton", this.resultadoRaton.toString());
    this.mostrarContador();
    this.goNext();
  }

}
