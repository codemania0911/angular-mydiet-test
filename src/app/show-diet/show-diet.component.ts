import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-show-diet',
  templateUrl: './show-diet.component.html',
  styleUrls: ['./show-diet.component.css']
})
export class ShowDietComponent implements OnInit {

  public material = [];
  public results = [];
  public breakfast = [];
  public brunch = [];
  public lunch = [];
  public dinner = [];
  public calories;
  public sendData;
  public dayNum = 0;

  constructor( private http: HttpClient ) { }

  ngOnInit() {

    this.calories = localStorage.getItem('calories');

    // select meat
    if(localStorage.getItem("pork") == "1") {
      this.material.push('pork');
    }
    if(localStorage.getItem("chicken") == "1") {
      this.material.push('chicken');
    }
    if(localStorage.getItem("beef") == "1") {
      this.material.push('beef');
    }
    if(localStorage.getItem("fish") == "1") {
      this.material.push('fish');
    }
    if(localStorage.getItem("bacon") == "1") {
      this.material.push('bacon');
    }
    //end select meat

    // select veggies
    if(localStorage.getItem("broccoli") == "1") {
      this.material.push('broccoli');
    }
    if(localStorage.getItem("mushrooms") == "1") {
      this.material.push('mushrooms');
    }
    if(localStorage.getItem("zucchini") == "1") {
      this.material.push('zucchini');
    }
    if(localStorage.getItem("cauliflower") == "1") {
      this.material.push('cauliflower');
    }
    if(localStorage.getItem("asparagus") == "1") {
      this.material.push('asparagus');
    }
    if(localStorage.getItem("avocado") == "1") {
      this.material.push('avocado');
    }
    //end select veggies

    // select products
    if(localStorage.getItem("egg") == "1") {
      this.material.push('egg');
    }
    if(localStorage.getItem("nuts") == "1") {
      this.material.push('nuts');
    }
    if(localStorage.getItem("cheese") == "1") {
      this.material.push('cheese');
    }
    if(localStorage.getItem("cottageCheese") == "1") {
      this.material.push('cottageCheese');
    }
    if(localStorage.getItem("butter") == "1") {
      this.material.push('butter');
    }
    if(localStorage.getItem("coconut") == "1") {
      this.material.push('coconut');
    }
    //end select products

    // example data
    this.sendData = ({
      'cal': this.calories,
      'material': this.material
    })
    //end example data

    this.http.post<any>('http://localhost:8000/api/getdietplan', this.sendData)
    .subscribe( (response) => {
      console.log('success', response);
      for(let i=0; i < response.length; i++) {
        this.breakfast.push({
          id: response[i][0]['id'],
          name: response[i][0]['name'],
          imageUrl: response[i][0]['image_url']
        });
        this.brunch.push({
          id: response[i][1]['id'],
          name: response[i][1]['name'],
          imageUrl: response[i][1]['image_url']
        });
        this.lunch.push({
          id: response[i][2]['id'],
          name: response[i][2]['name'],
          imageUrl: response[i][2]['image_url']
        });
        this.dinner.push({
          id: response[i][3]['id'],
          name: response[i][3]['name'],
          imageUrl: response[i][3]['image_url']
        });
      }
      console.log(this.breakfast)
    },
      (error) => { console.error('Error', error)}
    );

  }

  selectWeek(e) {
    console.log(e.target.value);
    if(e.target.value == "1") {
      this.dayNum = 0;
    }
    if(e.target.value == "2") {
      this.dayNum = 7;
    }
    if(e.target.value == "3") {
      this.dayNum = 14;
    }
    if(e.target.value == "4") {
      this.dayNum = 21;
    }
    if(e.target.value == "5") {
      this.dayNum = 28;
    }
    if(e.target.value == "6") {
      this.dayNum = 35;
    }
    if(e.target.value == "7") {
      this.dayNum = 42;
    }
    if(e.target.value == "8") {
      this.dayNum = 49;
    }
    if(e.target.value == "9") {
      this.dayNum = 56;
    }
  }

}
