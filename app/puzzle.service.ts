import { Injectable } from '@angular/core';

import { Puzzle } from './puzzle';
import { PUZZLES } from './mock-puzzles';

@Injectable()
export class PuzzleService {
  getPuzzles(): Promise<Puzzle[]>{
    return Promise.resolve(PUZZLES);
  }

  getPuzzle(id: number): Promise<Puzzle> {
    return this.getPuzzles()
		.then(puzzles => puzzles.find(puzzle => puzzle.id === id));
  }
}
