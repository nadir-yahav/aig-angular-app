import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: string[] = [];
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getCategories().subscribe((r) => (this.categories = r));
  }
}
