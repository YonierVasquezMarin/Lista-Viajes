import { Injectable } from '@angular/core';
import { Travel } from '../models/travel.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  /**
   * Obtener los viajes del JSON. La fuente puede ser local
   * o remota.
   */
  getTravels(): Travel[] {
    return []
  }
}
