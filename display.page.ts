import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home.service';
import { DisplayProduct } from './display.model';
@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {
  name: any;
  products: DisplayProduct[];
  displaySub: any;
  id: any;
  image_url: any;
  constructor(private homeService: HomeService) {}
  
  ngOnInit() {
    this.displaySub = this.homeService._displaypages.subscribe(displaypages => {
      this.products = displaypages;
      });
      this.getNameFromService();
  }
  //onFetchName() {
    //this.getNameFromService();
  //}
  ionViewWillEnter() {
  this.homeService.fetchCategory().subscribe(() => {
  });
}
  getNameFromService(){
  let obj = this.homeService.getUserObject();
  this.name =  obj.fullname;

}
 }
