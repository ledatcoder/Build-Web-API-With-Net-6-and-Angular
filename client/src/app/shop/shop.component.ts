import { IType } from './../shared/models/productType';
import { IBrand } from './../shared/models/brand';
import { ShopService } from './shop.service';
import { IProduct } from '../shared/models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: IProduct[];
  brands: IBrand[];
  types: IType[];

  constructor(private shopService: ShopService) { }
  ngOnInit() {
    this.getProducts();
    this.getBrands();
    this.getTypes();

  }

  getProducts() {
    this.shopService.getProduts().subscribe(response => {
      this.products = response.data;
    }, error => {
      console.log(error);
    });
  }

  getBrands() {
    this.shopService.getBrands().subscribe(response => {
      this.brands = response;
    }, error => {
      console.log(error);
    });
  }

  getTypes() {
    this.shopService.getTypes().subscribe(response => {
      this.types = response;
    }, error => {
      console.log(error);
    });
  }


  


}