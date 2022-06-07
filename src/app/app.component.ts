import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // aquí se envía un filtro a la tabla: solo se mostrarán estas columnas
  @Output() displayedColumns: string[] = ['origin', 'destiny', 'distance', 'medium', 'travelTime', 'availability', 'supplierCompany', 'price'];
  
}
