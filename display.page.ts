import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home.service';
import { Details } from './display.model';
//import { DisplayProduct } from './display.model';
//import { Details } from 'scr/app/display/display.model';
@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {
  name: any;
  detailSub: any;
  id: any;
  image_url: any;
  productDetails: Details[];
  constructor(private homeService: HomeService) {}
  ngOnInit() {
    this.detailSub = this.homeService._detailspages.subscribe(detailspages => {
      this.productDetails = detailspages;
      });
      this.getNameFromService();
      //alert('id');
  }
  ionViewWillEnter() {
    this.homeService.fetchProducts().subscribe(() => {
    });
  }
  getNameFromService() {
  let obj = this.homeService.getUserObject();
  this.name =  obj.fullname;

}
 }
























// expriment code 
//  ngOnInit() {
//   // this.displaySub = this.homeService._displaypages.subscribe(displaypages => {
//   //   this.products = displaypages;
//   //   });
//     this.getNameFromService();
// }
// //onFetchName() {
//   //this.getNameFromService();
// //}
// //   ionViewWillEnter() {
// //   this.homeService.fetchCategory().subscribe(() => {
// //   });
// // }
// getNameFromService(){
// let obj = this.homeService.getUserObject();
// this.name =  obj.fullname;

// }