import { Injectable } from '@angular/core';
import { SpecificDetail } from './productlist/productlist.model';
//import { Subject, Observable } from 'rxjs';
//import { ProductlistPage } from './productlist/productlist.page';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  specificDetails: SpecificDetail[] = [];
//  specificDetail: any;
  constructor() {
   }

   addToCart(specificDetail: any) {
    this.specificDetails.push(specificDetail);
    //alert('specificDetail');
    //console.log("addToCart");
    //console.log(specificDetail.name);
}
//get((console.log("In get() ="+ this.specificDetails);)
  //console.log("In get() ="+ this.specificDetails); {
    get() {
      //console.log("get method");
      //console.log(this.specificDetails);
      return this.specificDetails;
    }






































        //    addProductToCart(specificDetail:any) {
//    this.specificDetails.push(specificDetail);
//    console.log(specificDetail);
//   }

// // add(product: any) {
// //   this.products.push(product);
// // }
// get() {
//   return this.specificDetails;
// }


//  addCart(specificDetail: any) {
//     this.specificDetails.push(specificDetail);
//     }
//     get() {
//       return this.specificDetails;
//     }

  // fetchCart() {

  // }
}
