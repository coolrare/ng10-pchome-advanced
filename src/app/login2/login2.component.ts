import { Component, OnInit, OnDestroy } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';
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
