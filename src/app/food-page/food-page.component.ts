import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss'],
})
export class FoodPageComponent implements OnInit {
  food!: Food;
  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService, private cartService: CartService, private router: Router) {
    activatedRoute.params.subscribe(params => {
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

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
