import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {
  // sidebarItems = [
  //   { label: 'Listado', icon: 'label', url: './list' },
  //   { label: 'Añadir', icon: 'add', url: './new-hero' },
  //   { label: 'Buscar', icon: 'search', url: './search' },
  // ];

  // sidebarItems = [
  //   { icon: 'label', url: '/heroes/index' },
  //   { icon: 'add', url: './new-hero' },
  //   { icon: 'search', url: './search' },
  // ];
  
  sidebarItems = [
    { icon: 'add', url: './list', tooltip: 'Aplicacion' },
    { icon: 'info', url: './list', tooltip: 'Aplicacion' },
    // Otros elementos
  ];
  

  sidebarWidth = '50px'; // 

  
  constructor(private router: Router) {} 

  onSidenavItemClicked(item: any): void {
    if (item.url) {
      this.router.navigateByUrl(item.url);
   
      // this.sidenav.close();
    }
  }
}
