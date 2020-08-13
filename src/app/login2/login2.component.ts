import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl, FormGroupDirective, FormArray } from '@angular/forms';
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
    pwds: [
      {
        password: '123123',
        rememberMe: true
      },
      {
        password: '123',
        rememberMe: true
      }
    ]
  };

  form: FormGroup;

  constructor(private fb: FormBuilder, private twid: TwidDirective) { }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';

    // this.form = this.fb.group(this.data);
    // // tslint:disable-next-line: forin
    // for (const ctlName in this.form.controls) {
    //   const ctl = this.form.get(ctlName) as FormControl;
    //   ctl.setValidators([Validators.required]);
    // }

    // ['doggy.huang@gmail.com', [Validators.required, this.twid.validate]]
    this.form = this.fb.group({
      email: this.fb.control('', {
        validators: [Validators.required, this.twid.validate],
        asyncValidators: [],
        updateOn: 'blur'
      }),
      pwds: this.fb.array([
        this.fb.group({
          password: ['', [Validators.required]],
          rememberMe: false
        }),
        this.fb.group({
          password: ['', [Validators.required]],
          rememberMe: false
        })
      ])
    });

    this.resetForm();

  }

  doSubmit(fg: FormGroupDirective) {
    if (this.form.valid) {
      alert('表單送出');
    }
  }

  addNewPw() {
    const fa = this.form.get('pwds') as FormArray;
    fa.push(this.fb.group({
      password: ['', [Validators.required]],
      rememberMe: false
    }));
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

  f(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

  resetForm() {
    this.form.reset(this.data);
  }

}

