import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-s-trabajo-tb3',
  templateUrl: './s-trabajo-tb3.page.html',
  styleUrls: ['./s-trabajo-tb3.page.scss'],
})
export class STrabajoTb3Page implements OnInit {

  private resultadoRespaldo!: number; 

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log("Componente inicializado");
    this.resultadoRespaldo = parseInt(localStorage.getItem("resultadoRespaldo") || "0");
    this.mostrarContador();
  }
  goBack() {
    this.navCtrl.back();
  }

goNext() {
  this.navCtrl.navigateForward('/opc-s-tb3'); 
}

mostrarContador() {
  console.log(`Resultado: ${this.resultadoRespaldo}`);
}

handleClick(incremento: number) {
  this.resultadoRespaldo+= incremento;
  localStorage.setItem("resultadoRespaldo", this.resultadoRespaldo.toString());
  this.mostrarContador();
  this.goNext();
}
}
