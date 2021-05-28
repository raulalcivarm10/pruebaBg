import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductoService } from '../../services/producto.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos : any = [];
  numero: number = 1;
  total : number = 0;
  totalp: number=0;


  constructor(private _apiService:ProductoService, private router: Router, carritoservice:CarritoService) { 

  }

  ngOnInit(): void {
  this.cargarcarrito();
  this.totalpa();
  }

  ngDoCheck() {
    this.totalp = 0;
    for (let pp of this.productos){
      this.totalp=this.totalp+(this.numero*pp.precio)
    }
  }


  acumular(valor:number){
    this.numero += valor;
  }

  cargarProductos() {
    this._apiService.getProductos().subscribe(data => {
      if(data.codigoRetorno === '0001') {
        this.productos = data.data;
      }
    });
  }

  cargarcarrito(){
    
    if(!localStorage.getItem('productos')) {
      localStorage.setItem('productos', JSON.stringify([]));
    }
    this.productos = JSON.parse(localStorage.getItem('productos')!);

  }
  
  totalpa(){
    for (let pp of this.productos){
      this.totalp=this.totalp+(this.numero*pp.precio)
    }
    //return this.totalp
  }
  

}
