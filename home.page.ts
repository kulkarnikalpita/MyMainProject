import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, RequestOptions, Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: any;
  password: any;

  constructor(private router: Router, private http: Http) {}
  signup() {
    this.router.navigate(['sign-up']);
  }

  login() {
    let headers=new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    this.http.post("http://ec2-13-233-254-150.ap-south-1.compute.amazonaws.com/security/api/login",
    {
      "email":this.email,
      "password":this.password,
    },
      
    options).pipe(map(res =>res.json())).subscribe(data =>{
      console.log(data);
    },(err) => {
      alert(err);
      console.log("login succesfull");
    

    })
  }
  }
  