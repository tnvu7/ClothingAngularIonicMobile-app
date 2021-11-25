import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { AlertController } from '@ionic/angular';
import { HistoryProduct } from '../history-product';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  theType: string = "Type";
  theQuantity: string = "Quantity";
  Total: string = "Total";
  thePrice: string;
  theAvailQty: string;
  productsList: Product[];
  foundPro = {
    type: '',
    price: '',
    quantity: 0,
    time: '',
    totalPaid: ''
  };

  constructor(private service: ProductService, public alertController: AlertController) {

  }
  ngOnInit(): void {
    this.productsList = this.service.getAllProducts();
  }
  itemClicked(pro) {
    this.theType = pro.type;
    this.thePrice = pro.price;
    this.theAvailQty = pro.quantity;
    this.theQuantity = "Quantity";
    this.Total = "Total";
  }
  QtyClicked(num) {
    if (this.theQuantity == "Quantity") this.theQuantity = "";
    this.theQuantity += num;
    this.Total = (parseFloat(this.thePrice) * parseInt(this.theQuantity)).toFixed(2).toString();
  }
  async createAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }
  BuyBtnClicked() {
    if (parseInt(this.theQuantity) > parseInt(this.theAvailQty)) {
      this.createAlert("Please select sufficient quantity!");
    } else {

      this.foundPro.type = this.theType;
      this.foundPro.price = this.thePrice;
      this.foundPro.quantity = parseInt(this.theQuantity);
      this.foundPro.time = (new Date()).toString();
      this.foundPro.totalPaid = this.Total;
      console.log(this.foundPro);
      
      this.service.saveProduct(this.foundPro);
      this.productsList = this.service.getAllProducts();
    }
      this.foundPro = {} as HistoryProduct;
      this.theType = "Type";
      this.theQuantity = "Quantity";
      this.Total = "Total";
    
  }
}
