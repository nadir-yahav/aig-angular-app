import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, CategoriesComponent, FavoritesComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
