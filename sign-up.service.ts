import { Injectable } from '@angular/core';
import {  SignUpDetail } from 'src/app/sign-up/sign-up.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private detail = new BehaviorSubject<SignUpDetail[]>([]);
  // BehaviorSubject<SignUpDetail[]> it stores the current value//

  get details() {
    return this.detail.asObservable();
  // Observable is a collection values//
  }

  constructor() { }
  
}
