import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  

  constructor() { }

  @ViewChild("age", {static:false}) age;
  @ViewChild("height", {static:false}) height;
  @ViewChild("weight", {static: false}) weight;
  @ViewChild("target_weight", {static: false}) target_weight;

  ngOnInit() {

    $(".svg-select").click(function() {

      if($(this).hasClass("checked")) {
        $(this).removeClass("checked");
        localStorage.removeItem(this.id);
        console.log(this.id);
      } else {
        $(this).addClass("checked");
        localStorage.setItem(this.id, "1");
      }
    })

  }

  setGender(gender) {
    localStorage.setItem("gender", gender);
  }

  setPhysical(physical) {
    localStorage.setItem("physical_activity", physical);
  }

  

  setProfile() {
    localStorage.setItem('age', this.age.nativeElement.value);
    localStorage.setItem('height', this.height.nativeElement.value);
    localStorage.setItem('weight', this.weight.nativeElement.value);
    localStorage.setItem('target_weight', this.target_weight.nativeElement.value);
  }

}