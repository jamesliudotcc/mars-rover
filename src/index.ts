import { Position, Rover } from './types';
import { readFile, setBoundary, roversFromInput } from './setup';
import { runRovers } from './runRovers';

export const input = readFile()
  // Using lowercase doesn't create ambiguity, so shouldn't throw
  .toUpperCase()
  .split(/\n|\r|\r\n/gm);

let boundary = setBoundary(input);

let rovers: Rover[] = roversFromInput(input);
let finalRoverPositions: Position[] = [];
rovers.forEach(rover => {
  finalRoverPositions.push(runRovers(rover));
});

finalRoverPositions.forEach(rover => {
  console.log(`${rover.x} ${rover.y} ${rover.direction}`);
});
