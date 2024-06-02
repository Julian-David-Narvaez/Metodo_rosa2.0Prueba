import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.page.html',
  styleUrls: ['./tiempo.page.scss'],
})
export class TiempoPage implements OnInit {

  resultadoTablaRA!: number;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log("Componente inicializado");
    this.resultadoTablaRA = parseInt(localStorage.getItem("resultadoTablaRA") || "0");
    this.mostrarContador();
  }
  goBack() {
    this.navCtrl.back();
  }

  goNext() {
    this.navCtrl.navigateForward('/tp-telefono-tb1'); 
  }
  mostrarContador() {
    console.log(`Resultado: ${this.resultadoTablaRA}`);
  }

  handleClick(incremento: number) {
    this.resultadoTablaRA+= incremento;
    localStorage.setItem("resultadoTablaRA", this.resultadoTablaRA.toString());
    this.mostrarContador();
    this.goNext();
  }
}
