import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PuzzleDetailComponent } from './puzzle-detail.component';
import { PuzzleListComponent } from './puzzle-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/puzzleList', pathMatch: 'full' },
  { path: 'puzzleList', component: PuzzleListComponent }, 
  { path: 'detail/:id', component: PuzzleDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) 
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
