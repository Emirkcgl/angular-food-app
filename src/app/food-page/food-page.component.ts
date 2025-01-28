import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss'],
})
export class FoodPageComponent implements OnInit {
  food!: Food;
  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = foodService.getFoodById(params['id']);
      }
    });
  }
  ngOnInit(): void {}

  getFullStars(stars: number): number[] {
    return Array(Math.floor(stars)).fill(0); // Tam yıldız sayısını hesaplar
  }

  hasHalfStar(stars: number): boolean {
    return stars % 1 !== 0; // Yarım yıldız olup olmadığını kontrol eder
  }

  getEmptyStars(stars: number): number[] {
    return Array(5 - Math.ceil(stars)).fill(0); // Boş yıldız sayısını hesaplar
  }
}
