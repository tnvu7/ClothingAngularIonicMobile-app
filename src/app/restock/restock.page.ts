import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.page.html',
  styleUrls: ['./restock.page.scss'],
})
export class RestockPage implements OnInit {
  products : any;
  qty: string = "";
  chosenPro: string = "";
  constructor(private service: ProductService) { }

  ngOnInit() {
    this.products = this.service.getAllProducts();
  }
  restockBtn(){
    if (this.qty != "" && this.chosenPro != ""){
        this.service.restockProduct(this.chosenPro, parseInt(this.qty));
    }
  }
  itemClicked(pro){
    this.chosenPro = pro.type;
  }
}
