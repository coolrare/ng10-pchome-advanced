import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  data = {
    email: '',
    password: '123456',
    rememberMe: true
  };

  constructor() { }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';
  }

  doSubmit(form: NgForm) {
    if (form.valid) {
      alert('表單送出');
    }
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

}
