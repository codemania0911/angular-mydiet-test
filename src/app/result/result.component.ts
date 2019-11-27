import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public gender;
  public physical_activity;
  public walking;
  public age;
  public height;
  public weight;
  public target_weight;
  public bmi;
  public bmr;
  public archieve_weight;
  public metabolicAge;
  public water;

  constructor() { }

  ngOnInit() {

    this.gender = localStorage.getItem('gender');
    this.physical_activity = localStorage.getItem('physical_activity');
    this.walking = localStorage.getItem('walking');
    this.age = localStorage.getItem('age');
    this.height = localStorage.getItem('height');
    this.weight = localStorage.getItem('weight');
    this.target_weight = localStorage.getItem('target_weight');
    
    this.age = +this.age;
    this.weight = +this.weight;
    this.height = +this.height;
    this.height = this.height;
    this.bmi = this.weight*10000/(this.height*this.height);
    this.archieve_weight = this.weight - 4;

    //BMI
    this.bmi = (this.bmi).toFixed(2);

    //Water
    this.water = this.weight*0.03;

    if(this.gender == '1'){
      this.bmr = (9.99*this.weight) + (6.25*this.height) - (4.92*this.age) + 5;
    } else {
      this.bmr = (9.99*this.weight)  + (6.25*this.height) - (4.92*this.age) - 161;
    }

    if(this.physical_activity == "1"){
      this.bmr = this.bmr*1.2;
    }
    if(this.physical_activity == "2"){
      this.bmr = this.bmr*1.375;
    }
    if(this.physical_activity == "3"){
      this.bmr = this.bmr*1.55;
    }
    if(this.physical_activity == "4"){
      this.bmr = this.bmr*1.725;
    }
    if(this.physical_activity == "5"){
      this.bmr = this.bmr*1.9;
    }
    
    //Calories
    this.bmr = (this.bmr).toFixed(0);
    console.log(this.bmr);
    if(2 < this.age && this.age < 3) {
      if(this.bmr > 1200) {
        this.metabolicAge = this.bmr - 1200;
        this.metabolicAge = this.metabolicAge/100;
        this.metabolicAge = (this.metabolicAge).toFixed(0);
        this.metabolicAge += this.age;
      } else {
        this.metabolicAge = 1200 -this.bmr;
        this.metabolicAge = this.metabolicAge/100;
        this.metabolicAge = (this.metabolicAge).toFixed(0);
        this.metabolicAge = this.age - this.metabolicAge;
      }
    }
    if(4 <= this.age && this.age < 8) {
      if(this.bmr > 1500) {
        this.metabolicAge = this.bmr - 1500;
        this.metabolicAge = this.metabolicAge/100;
        this.metabolicAge = (this.metabolicAge).toFixed(0);
        this.metabolicAge += this.age;
      } else {
        this.metabolicAge = 1500 - this.bmr;
        this.metabolicAge = this.metabolicAge/100;
        this.metabolicAge = (this.metabolicAge).toFixed(0);
        this.metabolicAge = this.age - this.metabolicAge;
      }
    }
    if(9 <= this.age && this.age < 13) {
      if(this.gender == "1") {
        if(this.bmr > 2000) {
          this.metabolicAge = this.bmr - 2000;
          this.metabolicAge = this.metabolicAge/100;
          this.metabolicAge = (this.metabolicAge).toFixed(0);
          this.metabolicAge += this.age;
        } else {
          this.metabolicAge = 2000 - this.bmr;
          this.metabolicAge = this.metabolicAge/100;
          this.metabolicAge = (this.metabolicAge).toFixed(0);
          this.metabolicAge = this.age - this.metabolicAge;
        }
      }else {
        if(this.bmr > 1800) {
          this.metabolicAge = this.bmr - 1800;
          this.metabolicAge = this.metabolicAge/100;
          this.metabolicAge = (this.metabolicAge).toFixed(0);
          this.metabolicAge += this.age;
        } else {
          this.metabolicAge = 1800 - this.bmr;
          this.metabolicAge = this.metabolicAge/100;
          this.metabolicAge = (this.metabolicAge).toFixed(0);
          this.metabolicAge = this.age - this.metabolicAge;
        }
      }
    }
    if(14 <= this.age && this.age < 18) {
      if(this.gender == "1") {
        if(this.bmr > 2600) {
          this.metabolicAge = this.bmr - 2600;
          this.metabolicAge = this.metabolicAge/100;
          this.metabolicAge = (this.metabolicAge).toFixed(0);
          this.metabolicAge += this.age;
        } else {
          this.metabolicAge = 2600 - this.bmr;
          this.metabolicAge = this.metabolicAge/100;
          this.metabolicAge = (this.metabolicAge).toFixed(0);
          this.metabolicAge = this.age - this.metabolicAge;
        }
      }else {
        if(this.bmr > 1900) {
          this.metabolicAge = this.bmr - 1900;
          this.metabolicAge = this.metabolicAge/100;
          this.metabolicAge = (this.metabolicAge).toFixed(0);
          this.metabolicAge += this.age;
        } else {
          this.metabolicAge = 1900 - this.bmr;
          this.metabolicAge = this.metabolicAge/100;
          this.metabolicAge = (this.metabolicAge).toFixed(0);
          this.metabolicAge = this.age - this.metabolicAge;
        }
      }
    }
    if(19 <= this.age && this.age < 30) {
      if(this.gender == "1") {
        if(this.bmr > 2700) {
          this.metabolicAge = this.bmr - 2700;
          this.metabolicAge = this.metabolicAge/100;
          this.metabolicAge = (this.metabolicAge).toFixed(0);
          this.metabolicAge += this.age;
        } else {
          this.metabolicAge = 2700 - this.bmr;
          this.metabolicAge = this.metabolicAge/100;
          this.metabolicAge = (this.metabolicAge).toFixed(0);
          this.metabolicAge = this.age - this.metabolicAge;
        }
      }else {
        if(this.bmr > 2100) {
          this.metabolicAge = this.bmr - 2100;
          this.metabolicAge = this.metabolicAge/100;
          this.metabolicAge = (this.metabolicAge).toFixed(0);
          this.metabolicAge += this.age;
        } else {
          this.metabolicAge = 2100 - this.bmr;
          this.metabolicAge = this.metabolicAge/100;
          this.metabolicAge = (this.metabolicAge).toFixed(0);
          this.metabolicAge = this.age - this.metabolicAge;
        }
      }
    }
    if(31 <= this.age && this.age < 50) {
      if(this.gender == "1") {
        if(this.bmr >2500) {
          this.metabolicAge = this.bmr - 2500;
          this.metabolicAge = this.metabolicAge/100;
          this.metabolicAge = (this.metabolicAge).toFixed(0);
          this.metabolicAge += this.age;
        } else {
          this.metabolicAge = 2500 - this.bmr;
          this.metabolicAge = this.metabolicAge/100;
          this.metabolicAge = (this.metabolicAge).toFixed(0);
          this.metabolicAge = this.age - this.metabolicAge;
        }
      }else {
        if(this.bmr > 2000) {
          this.metabolicAge = this.bmr - 2000;
          this.metabolicAge = this.metabolicAge/100;
          this.metabolicAge = (this.metabolicAge).toFixed(0);
          this.metabolicAge += this.age;
        } else {
          this.metabolicAge = 2000 - this.bmr;
          this.metabolicAge = this.metabolicAge/100;
          this.metabolicAge = (this.metabolicAge).toFixed(0);
          this.metabolicAge = this.age - this.metabolicAge;
        }
      }
    }
    if(this.age >= 51) {
      if(this.gender == "1") {
        if(this.bmr > 2300) {
          this.metabolicAge = this.bmr - 2300;
          this.metabolicAge = this.metabolicAge/100;
          this.metabolicAge = (this.metabolicAge).toFixed(0);
          this.metabolicAge += this.age;
        } else {
          this.metabolicAge = 2300 - this.bmr;
          this.metabolicAge = this.metabolicAge/100;
          this.metabolicAge = (this.metabolicAge).toFixed(0);
          this.metabolicAge = this.age - this.metabolicAge;
        }
      }else {
        if(this.bmr > 1800) {
          this.metabolicAge = this.bmr - 1800;
          this.metabolicAge = this.metabolicAge/100;
          this.metabolicAge = (this.metabolicAge).toFixed(0);
          this.metabolicAge += this.age;
        } else {
          this.metabolicAge = 1800 - this.bmr;
          this.metabolicAge = this.metabolicAge/100;
          this.metabolicAge = (this.metabolicAge).toFixed(0);
          this.metabolicAge = this.age - this.metabolicAge;
        }
      }
    }
    
    localStorage.setItem('calories', this.bmr);
    this.bmr = (this.bmr-50).toString() +"~"+ (+this.bmr+50).toString();

  }

}
