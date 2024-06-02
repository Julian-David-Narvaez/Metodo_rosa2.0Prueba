import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-opc-tp-tb1',
  templateUrl: './opc-tp-tb1.page.html',
  styleUrls: ['./opc-tp-tb1.page.scss'],
})
export class OpcTpTb1Page implements OnInit {

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
    this.navCtrl.navigateForward('/tp-pantalla-tb2'); 
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
