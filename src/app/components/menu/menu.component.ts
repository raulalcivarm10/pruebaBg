import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  logeado: string = '';

  constructor() { }

  ngOnInit(): void {
    this.logeado = localStorage.getItem('usuario') || '';
    console.log(this.logeado); 
  }

  ngDoCheck() {
    this.logeado = localStorage.getItem('usuario') || '';
    console.log(this.logeado); 
  }

  salir() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
  }
}
