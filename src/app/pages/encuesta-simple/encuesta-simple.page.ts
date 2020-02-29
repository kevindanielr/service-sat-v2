import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuesta-simple',
  templateUrl: './encuesta-simple.page.html',
  styleUrls: ['./encuesta-simple.page.scss'],
})
export class EncuestaSimplePage implements OnInit {

  constructor() { }

  //data de prueba
  opciones = [
    {
      opcion: 'Muy malo',
      imagen: 'https://image.flaticon.com/icons/svg/2307/2307728.svg'
    },
    {
      opcion: 'Malo',
      imagen: 'https://image.flaticon.com/icons/svg/2307/2307768.svg'
    },
    {
      opcion: 'Regular',
      imagen: 'https://image.flaticon.com/icons/svg/2307/2307765.svg'
    },
    {
      opcion: 'Bueno',
      imagen: 'https://image.flaticon.com/icons/svg/2307/2307756.svg'
    },
    {
      opcion: 'Excelente',
      imagen: 'https://image.flaticon.com/icons/svg/2307/2307753.svg'
    }
  ];

  opciones2 = [
    {
      opcion: 'Piña',
      imagen: 'https://image.flaticon.com/icons/svg/1571/1571240.svg'
    },
    {
      opcion: 'Uva',
      imagen: 'https://image.flaticon.com/icons/svg/135/135542.svg'
    },
    {
      opcion: 'Naranja',
      imagen: 'https://image.flaticon.com/icons/svg/135/135620.svg'
    },
    {
      opcion: 'Manzana',
      imagen: 'https://image.flaticon.com/icons/svg/415/415733.svg'
    },
    {
      opcion: 'Banana',
      imagen: 'https://image.flaticon.com/icons/svg/1135/1135549.svg'
    }
  ];

  ngOnInit() {
  }

}
