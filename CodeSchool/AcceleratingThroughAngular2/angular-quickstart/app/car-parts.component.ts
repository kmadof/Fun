import { Component } from '@angular/core'
import { CarPart } from './car-part'
import { RacingDataService } from './racing-data.service';

@Component({
  selector: 'car-parts',
  templateUrl: 'app/car-parts.component.html',
  styleUrls: ['app/car-parts.component.css']
})

export class CarPartsComponent {
  carParts: CarPart[];

constructor(private racingDataService: RacingDataService){}

  ngOnInit() {
      this.carParts = this.racingDataService.getCarParts();
  };

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
