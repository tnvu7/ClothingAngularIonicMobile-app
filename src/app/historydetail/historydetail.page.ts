import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { HistoryProduct } from '../history-product';

@Component({
  selector: 'app-historydetail',
  templateUrl: './historydetail.page.html',
  styleUrls: ['./historydetail.page.scss'],
})
export class HistorydetailPage implements OnInit {
  name: any;
  product: HistoryProduct;
  constructor(private activatedRoute: ActivatedRoute, private service: ProductService) { }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('type');
    this.product = this.service.getProductByType(this.name);
  }

}
