import { Injectable, InjectableType } from "@angular/core";
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import { Observable, of } from "rxjs";

@Injectable({providedIn:'root'})
export class EmailValidatorService implements AsyncValidator{

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>((subscriber)=>{
      console.log({email});
      if (email === 'kiss@mail.com'){
        subscriber.next({emailTaken:true});
        subscriber.complete()
      }
      subscriber.next(null);
      subscriber.complete();
    });
    return httpCallObservable
  }



  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  //   const email = control.value;
  //   console.log(email);
  //   return of({
  //     emailTaken:true
  //   })
  //   throw new Error("Method not implemented.");
  // }

}
