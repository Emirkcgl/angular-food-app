import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/Tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
  tags: Tag[] = [];
  constructor(private foodService: FoodService) {}
  ngOnInit(): void {
    this.tags = this.foodService.getAllTags();
  }
}
