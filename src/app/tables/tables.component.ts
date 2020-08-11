import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Call the dataTables jQuery plugin
    $(document).ready(() => {
      $('#dataTable').DataTable();
    });
  }

}
