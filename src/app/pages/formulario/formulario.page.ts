import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  formData = {
    identificador: '',
    descripcion: '',
    empresa: '',
    departamento: '',
    seccion: '',
    empresaEvaluadora: '',
    nombreEvaluador: '',
    fechaEvalucion: '',
    nombreTrabajador: '',
    sexo: '',
    edad: '',
    antiguedadPuesto: '',
    tiempoJornada: '',
    duraccionLaboral: '',
    Observacion: ''

  };

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    const slidePage = document.querySelector<HTMLElement>(".slide-page")!;
    const nextBtnFirst = document.querySelector<HTMLButtonElement>(".firstNext")!;
    const prevBtnSec = document.querySelector<HTMLButtonElement>(".prev-1")!;
    const nextBtnSec = document.querySelector<HTMLButtonElement>(".next-1")!;
    const prevBtnThird = document.querySelector<HTMLButtonElement>(".prev-2")!;
    const submitBtn = document.querySelector<HTMLButtonElement>(".submit")!;
    const progressText = document.querySelectorAll<HTMLParagraphElement>(".step p");
    const progressCheck = document.querySelectorAll<HTMLElement>(".step .check");
    const bullet = document.querySelectorAll<HTMLElement>(".step .bullet");
    let current = 1;

    nextBtnFirst.addEventListener("click", function(event){
      event.preventDefault();
      slidePage.style.marginLeft = "-25%";
      bullet[current - 1].classList.add("active");
      progressCheck[current - 1].classList.add("active");
      progressText[current - 1].classList.add("active");
      current += 1;
    });

    nextBtnSec.addEventListener("click", function(event){
      event.preventDefault();
      slidePage.style.marginLeft = "-50%";
      bullet[current - 1].classList.add("active");
      progressCheck[current - 1].classList.add("active");
      progressText[current - 1].classList.add("active");
      current += 1;
    });

    submitBtn.addEventListener("click", function(){
      bullet[current - 1].classList.add("active");
      progressCheck[current - 1].classList.add("active");
      progressText[current - 1].classList.add("active");
      current += 1;
    });

    prevBtnSec.addEventListener("click", function(event){
      event.preventDefault();
      slidePage.style.marginLeft = "0%";
      bullet[current - 2].classList.remove("active");
      progressCheck[current - 2].classList.remove("active");
      progressText[current - 2].classList.remove("active");
      current -= 1;
    });

    prevBtnThird.addEventListener("click", function(event){
      event.preventDefault();
      slidePage.style.marginLeft = "-25%";
      bullet[current - 2].classList.remove("active");
      progressCheck[current - 2].classList.remove("active");
      progressText[current - 2].classList.remove("active");
      current -= 1;
    });
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      // Aquí puedes enviar el formulario, por ejemplo, a través de un servicio
      console.log('Formulario válido, enviado:', form.value);
      localStorage.setItem('formData', JSON.stringify(this.formData));
      console.log('Datos guardados en LocalStorage');
      this.navCtrl.navigateForward('/s-trabajo');
      
    } else {
      // Aquí puedes manejar lo que sucede si el formulario no es válido
      console.log('Formulario inválido');
      alert('Por favor, complete todos los campos antes de enviar el formulario');
    }
  }

  nextPage() {
    // Aquí puedes agregar la lógica para avanzar a la siguiente página
    console.log('Página siguiente');
  }

  prevPage() {
    // Aquí puedes agregar la lógica para retroceder a la página anterior
    console.log('Página anterior');
  }
}