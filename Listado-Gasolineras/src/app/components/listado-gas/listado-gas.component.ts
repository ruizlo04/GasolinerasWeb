import { Component, OnInit } from '@angular/core';
import { Gasolineras } from '../../modules/Gasolinera.interface';
import { GasolineraService } from '../../services/gasolinera.service';

@Component({
  selector: 'app-listado-gas',
  templateUrl: './listado-gas.component.html',
  styleUrls: ['./listado-gas.component.css']
})
export class ListadoGasComponent implements OnInit {

  listadoGasolineras: Gasolineras[] = [];

  constructor(private gasolineraService: GasolineraService) { }

  ngOnInit(): void {
    // Intentar cargar datos del localStorage primero
    const datosGuardados = this.gasolineraService.obtenerDatosDesdeLocalStorage();
    
    if (datosGuardados) {
      // Si hay datos guardados, usarlos
      this.listadoGasolineras = datosGuardados.ListaEESSPrecio.slice(0, 9);
      console.log('Datos cargados desde localStorage:', this.listadoGasolineras);
    } else {
      // Si no hay datos guardados, obtener de la API y guardar en localStorage
      this.gasolineraService.getGasolineras().subscribe(respuesta => {
        this.listadoGasolineras = respuesta.ListaEESSPrecio.slice(0, 9);
        this.gasolineraService.guardarDatosEnLocalStorage(respuesta);
        console.log('Datos cargados desde la API y guardados en localStorage:', this.listadoGasolineras);
      });
    }
  }
}