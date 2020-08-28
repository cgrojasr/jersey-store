import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Product } from '../../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products: Product[] = [
  //   {
  //     id: 1,
  //     image: 'assets/images/ATA_19_20.jpg',
  //     description: 'Atalanta Calcio Jersey 19/20',
  //     league: 'Serie A',
  //     price: 299
  //   },
  //   {
  //     id: 2,
  //     image: 'assets/images/ATM_19_20.jpg',
  //     description: 'Atletico de Madrid Jersey 19/20',
  //     league: 'La Liga',
  //     price: 299
  //   },
  //   {
  //     id: 3,
  //     image: 'assets/images/BAR_19_20.jpg',
  //     description: 'FC Barcelona Jersey 19/20',
  //     league: 'La Liga',
  //     price: 299
  //   },
  //   {
  //     id: 4,
  //     image: 'assets/images/BM_19_20.jpg',
  //     description: 'Bayern Munchen Jersey 19/20',
  //     league: 'Bundesliga',
  //     price: 299
  //   },
  //   {
  //     id: 5,
  //     image: 'assets/images/CHE_19_20.png',
  //     description: 'Chelsea Jersey 19/20',
  //     league: 'Premier League',
  //     price: 299
  //   },
  //   {
  //     id: 6,
  //     image: 'assets/images/JUV_19_20.png',
  //     description: 'Juventus Jersey 19/20',
  //     league: 'Serie A',
  //     price: 299
  //   },
  //   {
  //     id: 7,
  //     image: 'assets/images/MCI_19_20.jpg',
  //     description: 'Manchester City Jersey 19/20',
  //     league: 'Premier League',
  //     price: 299
  //   },
  //   {
  //     id: 8,
  //     image: 'assets/images/NAP_19_20.jpg',
  //     description: 'Napoli Jersey 19/20',
  //     league: 'Serie A',
  //     price: 299  
  //   },
  //   {
  //     id: 9,
  //     image: 'assets/images/OL_19_20.jpg',
  //     description: 'Lyon Jersey 19/20',
  //     league: 'Ligue 1',
  //     price: 299
  //   },
  // ];



  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): any {
    return this.http.get<Product[]>('https://platzi-store.herokuapp.com/products');
    // return this.products;
   }

   getProductById(id: string): any {
    return this.http.get<Product>(`https://platzi-store.herokuapp.com/products/${id}`);
     //return this.products.find(item => id === item.id.toString());
   }
}
