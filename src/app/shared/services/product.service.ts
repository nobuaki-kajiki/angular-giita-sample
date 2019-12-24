import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    new Product(1, 'テスト1',3800,'これはテストです。これはテストです。'),
    new Product(2,'テスト2',900,'サンプルサンプルサンプル'),
    new Product(3,'テスト3',6700,'サンプルサンプルサンプル')
  ];

  constructor() { }

list():Observable<Product[]>{
  return of(this.products);
}

get(id:number):Observable<Product>{
  return of(this.products[id -1]);
}

}
