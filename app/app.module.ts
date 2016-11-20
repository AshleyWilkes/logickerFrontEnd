import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';

import { PuzzleDetailComponent } from './puzzle-detail.component';
import { PuzzleListComponent } from './puzzle-list.component';
import { PuzzleService } from './puzzle.service'

@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    PuzzleDetailComponent,
    PuzzleListComponent
  ],
  providers: [
    PuzzleService
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})

export class AppModule { }

