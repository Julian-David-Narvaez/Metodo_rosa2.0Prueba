import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tp-telefono-tb1',
  templateUrl: './tp-telefono-tb1.page.html',
  styleUrls: ['./tp-telefono-tb1.page.scss'],
})
export class TpTelefonoTb1Page implements OnInit {
  private resultadoTelefono!: number; 

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log("Componente inicializado");
    this.resultadoTelefono = parseInt(localStorage.getItem("resultadoTelefono") || "0");
    this.mostrarContador();
  }

  goBack() {
    this.navCtrl.back(); 
  }
  goNext() {
    this.navCtrl.navigateForward('/opc-tp-tb1'); 
  }

  mostrarContador() {
    console.log(`Resultado Telefono: ${this.resultadoTelefono}`);
  }

  handleClick(incremento: number) {
    this.resultadoTelefono+= incremento;
    localStorage.setItem("resultadoTelefono", this.resultadoTelefono.toString());
    this.mostrarContador();
    this.goNext();
  }


}
