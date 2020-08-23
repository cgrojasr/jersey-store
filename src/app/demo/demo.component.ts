import { Component, OnInit } from '@angular/core';

import { Country } from '../model/country.model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  countries: Country[] = [
    {
      id: 1,
      name: 'Peru',
      capital: 'Lima',
      currency: 'Nuevo Sol',
      habitantes: 30
    },
    {
      id: 2,
      name: 'Chile',
      capital: 'Santiago',
      currency: 'Peso Chileno',
      habitantes: 20
    },
    {
      id: 3,
      name: 'Mexico',
      capital: 'CDMX',
      currency: 'Peso Mexicano',
      habitantes: 130
    },
  ];

  getId(id: number): void{
    console.log('Estamos en el pais con ID:' + id.toString());
  }

  constructor() { }

  ngOnInit(): void {
  }
}
