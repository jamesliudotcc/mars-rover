import { Position, RoverCommand } from './types';

export function stepRover(position: Position, command: RoverCommand): Position {
  if (command === 'L') {
    switch (position.direction) {
      case 'N':
        return { ...position, direction: 'W' };
      case 'E':
        return { ...position, direction: 'N' };
      case 'S':
        return { ...position, direction: 'E' };
      case 'W':
        return { ...position, direction: 'S' };
      default:
        throw new Error(
          `Something went wrong at position ${position} and command ${command}`
        );
    }
  } else if (command === 'R') {
    switch (position.direction) {
      case 'N':
        return { ...position, direction: 'E' };
      case 'E':
        return { ...position, direction: 'S' };
      case 'S':
        return { ...position, direction: 'W' };
      case 'W':
        return { ...position, direction: 'N' };
      default:
        throw new Error(
          `Something went wrong at position ${position} and command ${command}`
        );
    }
  } else if (command === 'M') {
    switch (position.direction) {
      case 'N':
        return { ...position, y: position.y + 1 };
      case 'E':
        return { ...position, x: position.x + 1 };
      case 'S':
        return { ...position, y: position.y - 1 };
      case 'W':
        return { ...position, x: position.x - 1 };
      default:
        throw new Error(
          `Something went wrong at position ${position} and command ${command}`
        );
    }
  } else {
    throw new Error('The command was not L, R, or M. How????');
  }
}
