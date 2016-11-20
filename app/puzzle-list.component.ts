import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Puzzle } from './puzzle';
import { PuzzleService } from './puzzle.service';

@Component({
  moduleId: module.id,
  selector: 'my-puzzle-list',
  templateUrl: '../app/puzzle-list.component.html'
})

export class PuzzleListComponent implements OnInit { 
  selectedPuzzle: Puzzle;
  puzzles: Puzzle[];

  constructor(
    private router: Router,
    private puzzleService: PuzzleService
  ) { }

  getPuzzles(): void {
    this.puzzleService.getPuzzles().then(puzzles => this.puzzles = puzzles);
  }

  onSelect(puzzle: Puzzle): void {
    this.selectedPuzzle = puzzle;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPuzzle.id]);
  }

  ngOnInit(): void {
    this.getPuzzles();
  }
}

