import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
    <p>There are {{totalCarParts()}} total parts in stock.</p>
    <ul>
      <li *ngFor="let carPart of carParts">
        <h2>{{carPart.name | uppercase}}</h2>
        <p>{{carPart.description}}</p>
        <p>{{carPart.price | currency:'EUR':true}}</p>
        <p *ngIf="carPart.inStock > 0">{{carPart.inStock}} in Stock</p>
        <p *ngIf="carPart.inStock === 0">Out of Stock</p>
      </li>
    </ul>`
})
export class AppComponent {
  title = "Ultra Racing";
  carParts = [{
    "id": 1,
    "name": "Super Tires",
    "description": "These tires are the very best",
    "inStock": 5,
    "price" : 4.99
  },
  {
    "id": 2,
    "name": "Super Tires 2",
    "description": "These tires are the very best of the best",
    "inStock": 3,
    "price" : 7.99
  },
  {
    "id": 3,
    "name": "Super Tires 5",
    "description": "These tires are the very best of the best",
    "inStock": 0,
    "price" : 9.99
  }];
  totalCarParts() {
    // let sum = 0;
    //
    // for(let carPart of this.carParts){
    //   sum += carPart.inStock;
    // }
    //
    // return sum;

    return this.carParts.reduce((prev,current) => prev + current.inStock, 0);
  };
}
