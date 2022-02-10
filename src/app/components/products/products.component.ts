import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartApiService } from 'src/app/services/cart-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: any;
  constructor(private api: ApiService, private cartApi: CartApiService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.productList = res;
      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1, total:a.price})
      });
    })
  }

  addtoCart(item:any){
    this.cartApi.addToCart(item);

  }
}
