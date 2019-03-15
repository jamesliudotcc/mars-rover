export type CompassDiretion = 'N' | 'E' | 'S' | 'W';
export type RoverCommand = 'M' | 'R' | 'L';
export type Boundary = { x: number; y: number };
export type Position = {
  x: number;
  y: number;
  direction: CompassDiretion;
};
export type Rover = {
  position: Position;
  commands: RoverCommand[];
};
