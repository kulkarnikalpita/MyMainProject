import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SpecificDetail } from './productlist.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
})
export class ProductlistPage implements OnInit {
specificSub: any;
specificDetails: SpecificDetail[];
catId: any;
_id: any;
//activatedRoute: any;
  constructor(private homeService: HomeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private cartService: CartService) { }

  ngOnInit() {
    // this.specificSub = this.homeService.fetchSpecificCategory(this.catId).subscribe(specificpages => {
    // this.specificDetails = specificpages;
    // });
}
ionViewWillEnter() {
  this.catId = this.activatedRoute.snapshot.paramMap.get('catId');
  this.specificSub = this.homeService.fetchSpecificCategory(this.catId).subscribe(specificpages => {
  this.specificDetails = specificpages;
  });
 // this.homeService.fetchSpecificCategory(this.catId).subscribe(() => {
  //  });
 }
//  addCart(product: any) {
//  console.log(this.specificDetails);
//  this.cartService.add(this.specificDetails);
 //this.cartService.setCart(this.specificDetail)
addCart() {

//  this.specificDetail.push(specificDetails);
//  this.cart.setCart(this.specificDetail);
 this.router.navigate(['cart']);
 }

 }
