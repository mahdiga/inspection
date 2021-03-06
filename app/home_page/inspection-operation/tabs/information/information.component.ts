import { Component, OnInit } from '@angular/core';
import data from "~/product_file/666.json";


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
  moduleId: module.id,
})
export class InformationComponent implements OnInit {
  notificationNum:any;
  notificationDate:any;
  itpNum:any;
  itpDate:any;
  programNum:any;
  programDate:any;
  fromHour:any;
  toHour:any;
  product:any;

  constructor() { }

  ngOnInit() {

          this.notificationNum=data.notificationsCode;
          this.notificationDate=data.updatedDateShamsi;
          this.itpNum=data.code;
          this.itpDate=data.itpDate;
          this.programNum=data.code;
          this.programDate=data.code;
          this.fromHour=data.timeFrom;
          this.toHour=data.timeTo;
          this.product=data.productTitle;


  }

}
