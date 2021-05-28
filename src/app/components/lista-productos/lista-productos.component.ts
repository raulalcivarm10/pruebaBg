import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { IProducto } from '../../models/productos.interface';
import { IResponseProductos } from '../../models/response.productos';
import { CarritoService } from '../../services/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos : any = [];
  numero: number = 0;

  constructor(private _apiService:ProductoService, private router: Router, carritoservice:CarritoService) { }

  ngOnInit(): void {
      this.cargarProductos();
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

  mostrarVentanaCarrito(producto:any) {
      console.log(producto);
  }
}
