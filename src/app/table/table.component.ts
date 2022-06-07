import { Component, Input, OnInit } from '@angular/core';
import { Travel } from '../models/travel.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  // configuraciones del menu de filtrado
  openFilterMenu: boolean = false;
  someItemSelected: boolean = false;
  idFilterItem: number = 1;

  // configuraciones de las columnas
  @Input() displayedColumns: string[] = [];

  // configuraciones de la tabla
  dataSource: Travel[] = []

  constructor(
    private dataService: DataService
  ) {
    this.loadTravels();
  }

  ngOnInit(): void { }

  /**
   * Muestra u oculta el menu para filtrar.
   */
  showOrHideFilterMenu() {
    if (this.openFilterMenu) {
      this.openFilterMenu = false;
    } else {
      this.openFilterMenu = true;
    }
  }

  /**
   * Cambiar el item abierto.
   * @param index el id del proximo item a abrir.
   */
  setFilterItem(index: number) {
    this.someItemSelected = true;
    this.idFilterItem = index;
  }

  /**
   * Cargar la lista de viajes en la tabla.
   */
  loadTravels() {
    this.dataService.getTravels().subscribe({
      next: (data: Travel[]) => {
        this.dataSource = data
      },
      error: (error: any) => {
        console.warn('Hubo un error al traer el JSON con los viajes');
        console.log(error);
      }
    })
  }

}
