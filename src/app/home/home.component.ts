import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute
  ) {}
  foods: Food[] = [];
  value!: number;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.foods = this.foodService.getAll().filter((food) => {
          return food.name
            .toLowerCase()
            .includes(params['searchTerm'].toLowerCase());
        });
      } else {
        this.foods = this.foodService.getAll();
      }
    });
    console.log(this.foods);
  }

  getFullStars(stars: number): number[] {
    return Array(Math.floor(stars)).fill(0);
  }

  hasHalfStar(stars: number): boolean {
    return stars % 1 !== 0;
  }

  getEmptyStars(stars: number): number[] {
    return Array(5 - Math.ceil(stars)).fill(0);
  }
}
