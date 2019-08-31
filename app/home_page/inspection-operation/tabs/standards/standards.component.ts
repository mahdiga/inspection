import { Component, OnInit } from '@angular/core';

import data from "~/product_file/666.json";
@Component({
  selector: 'app-standards',
  templateUrl: './standards.component.html',
  styleUrls: ['./standards.component.css'],
  moduleId: module.id,
})
export class StandardsComponent implements OnInit {
standards=[];
productTitle=data.productTitle;
  constructor() {

  }

  ngOnInit() {
    this.standards=data.inspectionStandards;
  }

}
