import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Puzzle } from './puzzle';
import { PuzzleService } from './puzzle.service';

@Component({
  moduleId: module.id,
  selector: 'my-puzzle-detail',
  templateUrl: '../app/puzzle-detail.component.html'
})

export class PuzzleDetailComponent implements OnInit {
  @Input()
  puzzle: Puzzle;

  constructor(
    private puzzleService: PuzzleService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.puzzleService.getPuzzle(+params['id']))
      .subscribe(puzzle => this.puzzle = puzzle);
  }
}
