import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-s-trabajo-tb2',
  templateUrl: './s-trabajo-tb2.page.html',
  styleUrls: ['./s-trabajo-tb2.page.scss'],
})
export class STrabajoTb2Page implements OnInit {

  private resultadoAltura!: number; 

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log("Componente inicializado");
    this.resultadoAltura = parseInt(localStorage.getItem("resultadoAltura") || "0");
    this.mostrarContador();
  }

  goBack() {
    this.navCtrl.back(); 
  }

goNext() {
  this.navCtrl.navigateForward('/opc-s-tb2'); 
}

mostrarContador() {
  console.log(`Resultado: ${this.resultadoAltura}`);
}

handleClick(incremento: number) {
  this.resultadoAltura+= incremento;
  localStorage.setItem("resultadoAltura", this.resultadoAltura.toString());
  this.mostrarContador();
  this.goNext();
}
}
