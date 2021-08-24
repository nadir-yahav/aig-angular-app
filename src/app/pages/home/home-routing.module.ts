import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'categories', pathMatch: 'full' },
      {
        path: 'categories',
        pathMatch: 'full',
        component: CategoriesComponent,
      },
      {
        path: 'favorites',
        pathMatch: 'full',
        component: FavoritesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
