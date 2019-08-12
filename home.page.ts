import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, RequestOptions, Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: any;
  password: any;
fullname : any;
  constructor(private router: Router, private http: Http, private homeservice: HomeService) {}
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
      //this.fullname = data.value;
     // alert(data.fullname);
      //call setUserMethod from service
      this.homeservice.setUserObject(data);
      this.router.navigate(['display']);

    },(err) => {
      alert(err);
      console.log("error");
      //this.router.navigate(['display', data]);
    

    })
  }
  }
  