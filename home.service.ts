import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HomeModel } from './home/home.model';
import { Http } from '@angular/http';
import { map, tap } from 'rxjs/operators';
import { DisplayProduct } from './display/display.model';
import { HttpClient } from '@angular/common/http';


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
}
}
