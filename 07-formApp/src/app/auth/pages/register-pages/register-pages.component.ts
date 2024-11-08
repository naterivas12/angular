import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidatorsService} from 'src/app/shared/service/validators.service';
import {EmailValidatorService} from 'src/app/shared/validators/email-validator.service';
import * as customValidators from 'src/app/shared/validators/validators';

@Component({
  templateUrl: './register-pages.component.html',
  styles: [
  ]
})
export class RegisterPagesComponent {

  public myForm:FormGroup = this.fb.group({
  name: ['',[Validators.required,Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
  // email: ['',[Validators.required,Validators.pattern(this.validatorsService.emailPattern)],[new EmailValidatorService()]],
  email: ['',[Validators.required,Validators.pattern(this.validatorsService.emailPattern)],[this.emailValidator]],
  username: ['',[Validators.required,this.validatorsService.cantBeStrider]],
  password: ['',[Validators.required,Validators.minLength(6)]],
  password2: ['',[Validators.required]],
  },{
    validators:[
      this.validatorsService.isFieldOneEqualFieldTwo('password','password2')
    ]
  })

  constructor(
    private fb:FormBuilder,
    private validatorsService:ValidatorsService,
    private emailValidator:EmailValidatorService
  ){}

  isValidFiel(field:string){
  //TODO: obtener validciòn desde un servicio
  return this.validatorsService.isValidFiel(this.myForm, field);
  }

onSubmit(){
  this.myForm.markAllAsTouched();
}

}
