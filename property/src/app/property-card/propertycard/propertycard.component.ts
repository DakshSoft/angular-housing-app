import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertycard',
  templateUrl: './propertycard.component.html',
  styleUrls: ['./propertycard.component.css']
})
export class PropertycardComponent implements OnInit {
  Property: any ={
    "Id":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
  }
  constructor() { }

  ngOnInit(): void {
  }

}
