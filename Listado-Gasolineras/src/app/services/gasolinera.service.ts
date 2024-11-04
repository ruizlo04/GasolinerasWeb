import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GasolineraListResponse } from '../modules/Gasolinera.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GasolineraService {

  constructor(private http: HttpClient) { }

  getGasolineras(): Observable<GasolineraListResponse> {
    return this.http.get<GasolineraListResponse>('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/');
  }

  guardarDatosEnLocalStorage(data: GasolineraListResponse): void {
    const jsonData = JSON.stringify(data);
    localStorage.setItem('gasolineraData', jsonData);
  }

  obtenerDatosDesdeLocalStorage(): GasolineraListResponse | null {
    const jsonData = localStorage.getItem('gasolineraData');
    return jsonData ? JSON.parse(jsonData) : null;
  }
}