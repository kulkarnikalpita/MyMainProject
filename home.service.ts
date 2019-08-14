import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HomeModel } from './home/home.model';
import { Http } from '@angular/http';
import { map, tap } from 'rxjs/operators';
//import { DisplayProduct } from 'src/app.component.model';
import { HttpClient } from '@angular/common/http';
//import { Details } from './product-item/product-item.model';
import { DisplayProduct } from './app.component.model';
import { Details } from './display/display.model';
import { SpecificDetail } from './productlist/productlist.model';


interface DisplayData {
  id: string;
  name: string;
  image_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  userObject: any;
 // private homemodels = new BehaviorSubject<HomeModel[]>([]);
   public _displaypages = new BehaviorSubject<DisplayProduct[]>([]);

 // get modelhome() {
   // return this.homemodels.asObservable();
  //}
  get displaypage() {
    return this._displaypages.asObservable();
  }
  public _detailspages = new BehaviorSubject<Details[]>([]);
  get detailpage() {
    return this._detailspages.asObservable();
  }
  public _specificpages = new BehaviorSubject<SpecificDetail[]>([]);
  get specifictpage() {
    return this._specificpages.asObservable();
  }

  constructor(private http: HttpClient) { }

  getUserObject() {
    return this.userObject;
  }
  setUserObject(val: any) {
    this.userObject = val;
}
fetchCategory() {
  return this.http
  .get(
    'http://ec2-13-233-254-150.ap-south-1.compute.amazonaws.com/catalog/api/categories')
    .pipe(
      map(resData => {
        const displaypages = [];
        for (const i in resData) {
          if (resData.hasOwnProperty(i)) {
            displaypages.push(
              new DisplayProduct(
                i,
                resData[i].id,
                resData[i].name,
                resData[i].image_url
               )
            );
          }
        }
        return displaypages;
        //return [];
      }),
      tap(displaypages => {
        this._displaypages.next(displaypages);
      })
    );
    //this.router.navigate(['product-item']);
    }
fetchProducts() {
  return this.http.get(
    'http://ec2-13-233-254-150.ap-south-1.compute.amazonaws.com/catalog/api/products_load/3')
    .pipe(
      map(resData => {
        const detailpages = [];
        for (const i in resData) {
          if (resData.hasOwnProperty(i)) {
            //before assinging the image_url
            //a. assign this to another variable resData[i].image_url 
            //b. add the server URL to above response
            //c. this value to be assigned below

       
        //  //var image_url_new  = resData[i].image_url;
        //     //var str = "/catalog/images/products/89002292.jpg";
        //     var str = resData[i].image_url;
        //     var res = str.split("/catalog");
        //     console.log(res[1]);
        //     //var image_url_new = res;
        var server_url = "http://ec2-13-233-254-150.ap-south-1.compute.amazonaws.com";
        var str = server_url+""+resData[i].image_url;
        
        var image_url_new = str;

        detailpages.push(
              new Details(
                i,
                resData[i].image_urls,
                resData[i].id,
                resData[i].barcode,
                resData[i].brand,
                resData[i].category_id,
                resData[i].code,
                resData[i].currency,
                resData[i].description,
                image_url_new,
                resData[i].name,
                resData[i].price,
                resData[i].type,
                resData[i].veg_non_veg,
                resData[i].uom,
                resData[i].weight,
                resData[i].cess,
                resData[i].cgst,
                resData[i].igst,
                resData[i].sgst,
                resData[i].category
               )
            );
          }
        }
        return detailpages;
      }),
      tap(detailpages => {
        this._detailspages.next(detailpages);
      })
    );
}
fetchSpecificCategory(category_id: string) {
  return this.http
  .get<SpecificDetail>(
    'ec2-13-233-254-150.ap-south-1.compute.amazonaws.com/catalog/api/product/category/${category_id}/1')
    .pipe(
      map(resData => {
        const specificpages = [];
        for (const i in resData) {
          if (resData.hasOwnProperty(i)) {
            var server_url = "http://ec2-13-233-254-150.ap-south-1.compute.amazonaws.com";
            var str = server_url+""+resData[i].image_url;

            var image_url_new = str;
            specificpages.push(
              new SpecificDetail(
                i,
                resData[i].image_urls,
                resData[i].id,
                resData[i].barcode,
                resData[i].brand,
                resData[i].category_id,
                resData[i].code,
                resData[i].currency,
                resData[i].description,
                image_url_new,
                resData[i].name,
                resData[i].price,
                resData[i].type,
                resData[i].veg_non_veg,
                resData[i].uom,
                resData[i].weight,
                resData[i].cess,
                resData[i].cgst,
                resData[i].igst,
                resData[i].sgst,
                resData[i].category
               )
            );
          }
        }
        return specificpages;
        //return [];
      }),
      tap(specificpages => {
        this._specificpages.next(specificpages);
      })
    );
    //this.router.navigate(['product-item']);
    }
}

