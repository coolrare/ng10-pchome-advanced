import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl, FormGroupDirective } from '@angular/forms';
import { isNationalIdentificationNumberValid } from 'taiwan-id-validator2';
import { TwidDirective } from '../twid.directive';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css'],
  providers: [TwidDirective]
})
export class Login2Component implements OnInit, OnDestroy {

  data = {
    email: 'doggy.huang@gmail.com',
    password: '123456',
    rememberMe: true
  };

  form: FormGroup;

  constructor(private fb: FormBuilder, private twid: TwidDirective) { }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      email: ['doggy.huang@gmail.com', [Validators.required, this.twid.validate]],
      group1: this.fb.group({
        password: ['123123', [Validators.required]],
        rememberMe: true
      })
    });
  }

  doSubmit(fg: FormGroupDirective) {
    if (this.form.valid) {
      alert('表單送出');
    }
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

  f(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

}

