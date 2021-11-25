import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { HistoryProduct } from '../history-product';
@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  purchasedList: HistoryProduct[];
  constructor(private service: ProductService) { }

  ngOnInit() {
    this.purchasedList = this.service.getPurchasedProducts();
  }
  
}
