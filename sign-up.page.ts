import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Headers, RequestOptions, Http } from '@angular/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/Rx';
//import { map } from 'rxjs/operators';
import {map} from 'rxjs/operators';  
//import { HttpClient } from 'selenium-webdriver/http';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  password: any;
  username: any;
  email: any;
  url: string;
  first_name: any;
  last_name: any;
  roles: any;
  contact_no: any;
  address: any;
  constructor(public navCtrl: NavController, private http: Http) { }

  ngOnInit() {
  }
  signup() {
     const headers = new Headers({'Content-Type': 'application/json'}); //headers says what the data is there inside the object which is sent
     const options = new RequestOptions({headers}); //to pass headers in options variable using Requestoption it pass every http calls
    // tslint:disable-next-line: align
    this.http.post("http://ec2-13-233-254-150.ap-south-1.compute.amazonaws.com/security/api/signup",
    {
      "password" : this.password,
      "email" : this.email,
      "first_name" : this.first_name,
      "last_name" : this.last_name,
      "contact_no" : this.contact_no,
      "role" : "Vendor",
      "address" : this.address
    },
    options).pipe(map(res => res.json())).subscribe(data => { //res will convert into json format and stores it and .subscribe(data it provide continuous data 
      console.log(data);
    }, (err) => {
      //alert(err);
      //alert('data already exists');
    });
  }
  }
