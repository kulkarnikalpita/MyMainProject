import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SpecificDetail } from './productlist.model';
import { CartService } from '../cart.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
})
export class ProductlistPage implements OnInit {
specificSub: any;
specificDetails: SpecificDetail[];
catId: any;
catName: any;
cartCount: any;
_id: any;
//activatedRoute: any;
  constructor(private homeService: HomeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private cartService: CartService,
              private alertCtrl: AlertController) { }


  ngOnInit() {
    // this.specificSub = this.homeService.fetchSpecificCategory(this.catId).subscribe(specificpages => {
    // this.specificDetails = specificpages;
    // });
 //   this.showConfirm();
}
ionViewWillEnter() {
  this.catId = this.activatedRoute.snapshot.paramMap.get('catId');
  this.catName = this.activatedRoute.snapshot.paramMap.get('name');
  this.specificSub = this.homeService.fetchSpecificCategory(this.catId).subscribe(specificpages => {
  this.specificDetails = specificpages;
  });
  //from CartService
  this.cartCount= this.cartService.getLength();
 // this.homeService.fetchSpecificCategory(this.catId).subscribe(() => {
  //  });
 }

 
 addCart(specific: any) {
  this.cartService.addToCart(specific);
  this.showConfirm();
  //from cartService
  this.cartCount= this.cartService.getLength();
  // alert("cart succesfully");
    }
    async showConfirm() {
         const confirm = await this.alertCtrl.create({
           header: 'confirm',
           message: 'Added to cart',
           buttons: [
             {
               text: 'ok',
               handler: () => {
                 console.log('ok');
                 return new Promise(resolve => setTimeout(resolve, 2000));
               }
             }
           ]
         });
         await confirm.present();
       }
  //   showConfirm() {
  //     const confirm = zthis.alertCtrl.create({
  //      // title: 'Use this lightsaber?',
  //       message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
  //       buttons: [
  //         {
  //           text: 'Disagree',
  //           handler: () => {
  //             console.log('Disagree clicked');
  //           }
  //         },
  //         {
  //           text: 'Agree',
  //           handler: () => {
  //             console.log('Agree clicked');
  //           }
  //         }
  //       ]
  //     });
    
  //   }
  // }
//  showConfirm() {
//    const confirm = this.alertCtrl.create({
//      title: 'Use this lightsaber?',
//      message: 'cart successful',
//      buttons: [
//        {
//          text: 'ok',
//          handler: () => {
//            console.log('ok');
//          }
//        }
//      ]
//    });
//  }
}






















// addToCart(specificDetail: any) {
  //   this.specificDetails.push(specificDetail);
  //   console.log(specificDetail);
  //   this.router.navigate(['cart']);
  














  // addToCart(specificDetail: any) {
  //   this.specificDetails.push(specificDetail);
  //   console.log(specificDetail);
  //   this.router.navigate(['cart']);
  
  // }
  //   get() {
  //      return this.specificDetails;
  //   }
  
  
  

 //  addCart(product: any) {
//  console.log(this.specificDetails);
//  this.cartService.add(this.specificDetails);
 //this.cartService.setCart(this.specificDetail);
//  console.log(this.specificDetail);
  //  console.log('inside addCart()');
 // this.specificDetails.push(specificDetail);
  //this.cart.setCart(this.specificDetail);