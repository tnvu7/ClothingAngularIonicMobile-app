import { Injectable } from "@angular/core";
import { Product } from './Product';
import { HistoryProduct } from "./history-product";
//import * as data from './products.json'

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    //private products : any = (data as any).default;
    private products : any = [{
        "type": "Pants",
        "price": "50.7",
        "quantity": 20
    }, {
        "type": "Shoes",
        "price": "90",
        "quantity": 50
    },{
        "type": "Hats",
        "price": "20.7",
        "quantity": 10
    }, {
        "type": "Tshirts",
        "price": "10",
        "quantity": 10
    },{
        "type": "Dresses",
        "price": "40.3",
        "quantity": 24
    }]
    private purchasedProducts: HistoryProduct[] = [];

    constructor() {}

    getAllProducts(){
        console.log(this.products);
        return [...this.products];
    }
    saveProduct(foundPro){
        this.products.forEach(pro => {
            if (pro.type == foundPro.type){
                pro.quantity -= foundPro.quantity;
            }
        });
        this.purchasedProducts.push(foundPro);
    }
    getPurchasedProducts(){
        console.log(this.purchasedProducts);
        return [...this.purchasedProducts];
    }
    getProductByType(theType){
        return {...this.purchasedProducts.find(
            product => {return product.type == theType;}
        )}
    }
    restockProduct(name, newQty){
        this.products.forEach(pro => {
            if (pro.type == name){
                pro.quantity += newQty;
            }
        });
    }
}