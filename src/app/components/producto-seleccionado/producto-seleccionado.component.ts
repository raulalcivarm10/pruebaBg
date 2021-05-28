import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-seleccionado',
  templateUrl: './producto-seleccionado.component.html',
  styleUrls: ['./producto-seleccionado.component.css']
})
export class ProductoSeleccionadoComponent implements OnInit {

  productos : any = [];
  
  constructor(private _apiService:ProductoService,  private router: Router) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this._apiService.getProductos().subscribe(data => {
      if(data.codigoRetorno === '0001') {
        this.productos = data.data;
      }
    });
  }

  agregarProducto(producto: any) {
    let listaProductos ='[]';

    if(localStorage.getItem('token')) {

      if(!localStorage.getItem('productos')) 
        localStorage.setItem('productos', JSON.stringify([]));
        
      listaProductos = localStorage.getItem('productos')!;
      let lista = JSON.parse(listaProductos);
      lista.push(producto);
      localStorage.setItem('productos', JSON.stringify(lista));
    }
    else{
      this.router.navigate(['login']);
    }
  }

}
