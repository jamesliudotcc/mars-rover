import * as fs from 'fs';
import {
  Boundary,
  CompassDiretion,
  Position,
  Rover,
  RoverCommand,
} from './types';
import { input } from './index';
export function readFile() {
  if (process.argv.length < 3) {
    console.log(`Usage: node ${process.argv[1]} FILENAME`);
  }
  const filename = process.argv[2];
  return fs.readFileSync(filename, 'utf8');
}
export function setBoundary(input: string[]): Boundary {
  const boundary = {
    x: Number(input[0].split(' ')[0]),
    y: Number(input[0].split(' ')[1]),
  };
  if (isNaN(boundary.x) || isNaN(boundary.y)) {
    throw new Error('Boundary line 0 must be of format 1 1');
  }
  return boundary;
}
export function roversFromInput(input: string[]) {
  let rovers: Rover[] = [];
  for (let i = 1; i < input.length - 1; i += 2) {
    let initialPosition: Position = writeInitialPosition(i);
    let moves: RoverCommand[] = writeRoverMoves(i);
    rovers.push({
      position: initialPosition,
      commands: <RoverCommand[]>moves,
    });
  }
  return rovers;
}
function writeRoverMoves(i: number) {
  let movesLine = input[i + 1].split('');
  let moves: RoverCommand[];
  if (movesLine.every(move => move === 'M' || move === 'L' || move === 'R')) {
    moves = <RoverCommand[]>movesLine;
  } else {
    throw new Error(
      `Direction line ${i} did not correctly specify M, R, or L, correct format is MMRMLMMRL`
    );
  }
  return moves;
}
function writeInitialPosition(i: number) {
  let initialPositionLine = input[i].split(' ');
  let initialPosition: {
    x: number;
    y: number;
    direction: CompassDiretion;
  };
  if (
    initialPositionLine[2] === 'N' ||
    initialPositionLine[2] === 'E' ||
    initialPositionLine[2] === 'S' ||
    initialPositionLine[2] === 'W'
  ) {
    initialPosition = {
      x: Number(initialPositionLine[0]),
      y: Number(initialPositionLine[1]),
      direction: <CompassDiretion>initialPositionLine[2],
    };
  } else {
    throw new Error(
      `Placement line ${i} did not correctly specify N, E, S, or W, correct format is 1 2 N`
    );
  }
  return initialPosition;
}
