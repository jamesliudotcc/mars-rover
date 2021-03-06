import { Position, Rover } from './types';
import { readFile, setBoundary, roversFromInput } from './setup';
import { runRover } from './runRover';

const input = readFile()
  // Using lowercase doesn't create ambiguity, so shouldn't throw
  .toUpperCase()
  .split(/\n|\r|\r\n/gm);

let rovers: Rover[] = roversFromInput(input);
let finalRoverPositions: Position[] = [];
rovers.forEach(rover => {
  finalRoverPositions.push(runRover(rover, finalRoverPositions));
});

finalRoverPositions.forEach(rover => {
  console.log(`${rover.x} ${rover.y} ${rover.direction}`);
});
