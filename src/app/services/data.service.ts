import { Injectable } from '@angular/core';
import { Travel } from '../models/travel.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { EnvironmentVariables } from 'src/config/environment-variables';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Obtener los viajes del archivo JSON.
   */
  getTravels(): Observable<Travel[]> {
    return this.httpClient.get<Travel[]>(EnvironmentVariables.TRAVELS_JSON_URL);
  }
}
