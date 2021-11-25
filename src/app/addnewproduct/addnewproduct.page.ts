import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-addnewproduct',
  templateUrl: './addnewproduct.page.html',
  styleUrls: ['./addnewproduct.page.scss'],
})
export class AddnewproductPage implements OnInit {
  name = new FormControl('');
  quantity = new FormControl('');
  price = new FormControl('');
  constructor(private service: ProductService,  public alertController: AlertController, private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }
  async createAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }
  onSave(){
    if (this.name.value != "" && this.quantity.value != "" && this.price.value != "") {
      this.service.addNewProduct(this.name.value, this.price.value, this.quantity.value);
      this.navCtrl.back();
    } else {
      this.createAlert("Please fill out all the fields");
    }
    
  }
}
