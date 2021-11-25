import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.page.html',
  styleUrls: ['./restock.page.scss'],
})
export class RestockPage implements OnInit {
  products : any;
  qty= new FormControl('');
  chosenPro: string = "";
  label: string= "";
  constructor(private service: ProductService, public alertController: AlertController) { }

  ngOnInit() {
    this.products = this.service.getAllProducts();
  }
  async createAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }
  restockBtn(){
    if (this.qty.value != "" && this.chosenPro != ""){
        this.service.restockProduct(this.chosenPro, parseInt(this.qty.value));
        this.label = "";
    } else if (this.qty.value == ""){
        this.createAlert("Please enter the quantity");
    } else {
      this.createAlert("Please enter pick the product");
    }
  }
  itemClicked(pro){
    this.chosenPro = pro.type;
    this.label = "Restocking: " + pro.type;
  }
}
