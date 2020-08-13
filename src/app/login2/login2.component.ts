import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit, OnDestroy {

  data = {
    email: 'doggy.huang@gmail.com',
    password: '123456',
    rememberMe: true
  };

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      email: 'doggy.huang@gmail.com',
      password: '123123',
      rememberMe: true
    });
  }

  doSubmit(form) {
    if (form.valid) {
      alert('表單送出');
    }
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

}
