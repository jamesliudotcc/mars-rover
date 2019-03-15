import { Position, Rover } from './types';
import { moveRover } from './moveRover';
export function runRover(rover: Rover): Position {
  let history: Position[] = [rover.position];
  rover.commands.forEach(direction => {
    // Unshift so that the program can always read [0] for latest position
    // Further history is kept for debugging purposes
    history.unshift(moveRover(history[0], direction));
    // check history[0] for off cliff, prior rovers
  });
  return history[0];
}
