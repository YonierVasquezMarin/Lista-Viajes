import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];






@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  openFilterMenu: boolean = false;
  someItemSelected: boolean = false;
  idFilterItem: number = 1;


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);



  constructor(
    private dataService: DataService
  ) {
    console.log(this.dataService.getTravels());
  }

  ngOnInit(): void {
  }

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

}