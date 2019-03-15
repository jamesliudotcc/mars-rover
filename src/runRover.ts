import { Position, Rover } from './types';
import { stepRover } from './stepRover';

export function runRover(
  rover: Rover,
  previousRoverPositions: Position[]
): Position {
  let history: Position[] = [rover.position];
  rover.commands.forEach(direction => {
    // Unshift so that the program can always read [0] for latest position
    // Further history is kept for debugging purposes
    history.unshift(stepRover(history[0], direction));
    // check history[0] for off cliff, prior rovers
    if (history[0].x < 0 || history[0].y < 0) {
      throw new Error(
        `Rover with starting position ${rover.position.x}, ${
          rover.position.x
        } fell off the ledge at ${history[0].x}, ${history[0].y}`
      );
    }
    if (history[0].x > rover.boundary.x || history[0].y > rover.boundary.y) {
      throw new Error(
        `Rover with starting position ${rover.position.x}, ${
          rover.position.x
        } fell off the ledge at ${history[0].x}, ${history[0].y}`
      );
    }
  });
  return history[0];
}
