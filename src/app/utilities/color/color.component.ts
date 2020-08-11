import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  name = '';
  type = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.name = this.route.snapshot.queryParamMap.get('name');

    this.route.queryParamMap.subscribe(params => {
      this.name = params.get('name');
    });

    this.type = +this.route.snapshot.paramMap.get('type');

    this.route.paramMap.subscribe(params => {
      this.type = +params.get('type');
    });

  }

}
