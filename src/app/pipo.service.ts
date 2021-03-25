import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable()
export class PipoService {
  obsCompteur= interval(1000);
  constructor() { }

}