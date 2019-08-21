import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { SpecificDetail } from '../productlist/productlist.model';
//import { ProductlistPage } from '../productlist/productlist.page';
//import { HomeService } from '../home.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  //inputs: ['products'];
})
export class CartPage implements OnInit {
  specificDetails: SpecificDetail[];

  constructor(private activatedRoute: ActivatedRoute, private cartService: CartService ) { }

  ngOnInit() {

 this.fetchCart();

    }
    // ionViewWillEnter(specific : any) {
    //   this.cartService.addToCart(specific);

    // }

  fetchCart() {
    //console.log(this.cartService.get());
    this.specificDetails = this.cartService.get();
    console.log(this.specificDetails);
  }
  }

