import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonthsService {

  constructor() { }

  months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]
}
